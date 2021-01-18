const MagicString = require('magic-string');
const fs = require('fs');
const path = require('path');

module.exports = inlineCSS = () => {
  return {
    name: 'inline-stylesheets',
    transform (code, filePath) {

      const cssStyles = new Map();
      code = code
        .replace(/import\s.*from (.*?\.css(\.js|))/gi, importStatement => {
          const varName = importStatement.replace(/import|{|}|from.*?$/gi, '').trim();
          const relativePath = importStatement.replace(/^.*from '(.*)$/gi, '$1');
          let fullPath = path.resolve(path.dirname(filePath), relativePath);
          if(fullPath.endsWith('.css')) fullPath += '.js';
          const css = fs.readFileSync(fullPath).toString().replace(/^.*`/g, '').replace(/`.*$/, '');
          cssStyles.set(varName, css);
          return importStatement;
        })

        cssStyles.forEach((item, key) => {
          code = code.replace(new RegExp('\\$\\{' + key + '\\}', 'gi'), match => item);
        })

        const magicString = new MagicString(code);

        return { 
          code: magicString.toString(),
          map: magicString.generateMap({ hires: true })
        }
    }
  }
}