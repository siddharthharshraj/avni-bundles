const fs = require('fs');
const glob = require('glob');
const path = require('path');

function isLikelyJavaScript(str) {
    const jsPatterns = [
        /function\s*\(/,
        /=>\s*{/,
        /return\s+/,
        /if\s*\(/,
        /for\s*\(/,
        /while\s*\(/,
        /var\s+|let\s+|const\s+/,
        /\$\{.*?\}/,
        /\.forEach\(/,
        /\.map\(/,
        /\.filter\(/
    ];

    return jsPatterns.some(pattern => pattern.test(str));
}

function findJavaScriptPaths(obj, currentPath = '', paths = []) {
    if (!obj || typeof obj !== 'object') return paths;

    for (const [key, value] of Object.entries(obj)) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
        if (typeof value === 'string' && isLikelyJavaScript(value)) {
            paths.push({
                path: newPath,
                value: value
            });
        } else if (typeof value === 'object' && value !== null) {
            findJavaScriptPaths(value, newPath, paths);
        }
    }
    return paths;
}

function processNonJsStrings(jsonString, jsKeys, filePath) {
    const jsonObj = JSON.parse(jsonString);

    function processValue(obj, parentKey) {
        if (Array.isArray(obj)) {
            return obj.map(item => processValue(item, parentKey));
        } else if (typeof obj === 'object' && obj !== null) {
            const result = {};
            for (const [key, value] of Object.entries(obj)) {
                const fullKey = parentKey ? `${parentKey}.${key}` : key;
                if (!jsKeys.includes(key)) {
                    result[key] = processValue(value, fullKey);
                } else {
                    result[key] = value;
                }
            }
            return result;
        } else if (typeof obj === 'string') {
            return obj.replace("\n", '');
        }
        return obj;
    }

    const processedObj = processValue(jsonObj);
    const newJsonContent = JSON.stringify(processedObj, null, 2);
    fs.writeFileSync(filePath, newJsonContent, 'utf8');
    return newJsonContent;
}

function findAndReplaceJSStrings(jsonString, jsPaths, filePath) {
    const jsKeys = jsPaths.map(p => p.path.split('.').pop());

    // First, handle non-JavaScript strings by removing newlines
    let processed = processNonJsStrings(jsonString, jsKeys, filePath);

    const uniqueKeys = [...new Set(jsKeys)];
    // Then handle JavaScript code
    uniqueKeys.forEach(key => {
        const pattern = new RegExp(`"${key}"\\s*:[\\s\\S]*?'use strict';`, 'g');
        console.log(`replacing pattern: ${pattern}`);
        processed = processed.replace("//SAMPLE RULE EXAMPLE", "");
        processed = processed.replace(/};\\n"/g, '}\n');
        processed = processed.replace(pattern, `"${key}" : `);
        processed = processed.replace(/\\n/g, '\n');
        processed = processed.replace(/\\"/g, '"');
        processed = processed.replace(/};",/g, "},");
    });

    return processed;
}

function renameJsonToJs(file) {
    try {
        const newFileName = file.replace(/\.json$/, '.js');
        fs.renameSync(file, newFileName);
        console.log(`Renamed: ${file} -> ${newFileName}`);
        return newFileName;
    } catch (err) {
        console.error(`Error renaming file ${file}:`, err.message);
        return null;
    }
}

function replaceJsonNodesHavingJSCode(directory) {
    const results = {};

    try {
        let files = glob.sync(`${directory}/**/*.json`);

        if (files.length === 0) {
            console.log(`No JSON files found in: ${directory}`);
            return results;
        }

        files.forEach(file => {
            // if (file !== "csj-uat/reportCard.json")
            //     return;

            try {
                console.log(`\nProcessing file: ${file}`);
                const content = fs.readFileSync(file, 'utf8');
                const jsonContent = JSON.parse(content);
                const jsPaths = findJavaScriptPaths(jsonContent);

                if (jsPaths.length > 0) {
                    console.log(`Found ${jsPaths.length} JavaScript paths in ${file}:`);

                    const processedContent = findAndReplaceJSStrings(content, jsPaths, file);
                    fs.writeFileSync(file, processedContent);
                    console.log(`Successfully processed file: ${file}`);

                    const newFileName = renameJsonToJs(file);
                    if (!newFileName) {
                        console.error(`Error renaming file ${file}`);
                        return;
                    }

                    results[path.relative(directory, newFileName)] = jsPaths.map(p => p.path);
                } else {
                    console.log(`No JavaScript paths found in ${file}`);
                }
            } catch (err) {
                console.error(`Error processing ${file}:`, err.message);
            }
        });
    } catch (err) {
        console.error('Error:', err.message);
    }

    return results;
}

const directory = process.argv[2];
if (!directory) {
    console.error('Please provide a directory name as an argument');
    process.exit(1);
}

console.log('Processing JSON files in ...', directory);
replaceJsonNodesHavingJSCode(directory);
