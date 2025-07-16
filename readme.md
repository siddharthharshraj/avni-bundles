### Setup
- Clone this repository
- Install node version 20 or higher
- Download bundle
- Unzip bundle under development folder, without locations. e.g. if you downloaded Gram Seva Trust bundle then your files should be like development/gst/formMappings.json, development/gst/identifierSource.json and so on. Recommended to use short names for bundle folders.
- Open terminal and navigate to avni-impl-bundles (root) folder
  - run `npm i`
  - run `make transform-bundle bundle=gst`

### IDE
Currently, this tool works in windsurf IDE and not in IntelliJ. Since the JavaScript files created from json shows in error in IntelliJ.

### Recommendation
- **When prompting ask windsurf to create code in a new JavaScript file**
