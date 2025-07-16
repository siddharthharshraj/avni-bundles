const fs = require('fs');
const path = require('path');

function isLikelyJavaScript(str) {
    // Common JavaScript patterns to look for
    const jsPatterns = [
        /function\s*\(/,           // function declarations
        /=>\s*{/,                 // arrow functions
        /return\s+/,              // return statements
        /if\s*\(/,                // if statements
        /for\s*\(/,               // for loops
        /while\s*\(/,             // while loops
        /var\s+|let\s+|const\s+/, // variable declarations
        /\$\{.*?\}/,              // template literals
        /\.forEach\(/,            // common array methods
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
                preview: value.slice(0, 100) + (value.length > 100 ? '...' : '')
            });
        } else if (typeof value === 'object' && value !== null) {
            findJavaScriptPaths(value, newPath, paths);
        }
    }
    return paths;
}

function processJsonFiles(directory) {
    const results = {};
    
    // Read all JSON files in the directory
    function processDir(dir) {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                processDir(fullPath);
            } else if (file.endsWith('.json')) {
                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    const jsonContent = JSON.parse(content);
                    const jsPaths = findJavaScriptPaths(jsonContent);
                    
                    if (jsPaths.length > 0) {
                        results[path.relative(directory, fullPath)] = jsPaths;
                    }
                } catch (err) {
                    console.error(`Error processing ${fullPath}:`, err.message);
                }
            }
        });
    }
    
    processDir(directory);
    return results;
}

const targetDir = '/Users/vsingh/projects/avni/avni-impl-bundles/csj-uat';
const results = processJsonFiles(targetDir);

// Print results in a readable format
Object.entries(results).forEach(([file, paths]) => {
    console.log(`\nFile: ${file}`);
    paths.forEach(({path, preview}) => {
        console.log(`  Path: ${path}`);
        console.log(`  Preview: ${preview}\n`);
    });
});
