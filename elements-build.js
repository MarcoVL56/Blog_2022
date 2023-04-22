const fs = require('fs-extra');
const concat = require('concat');

(async function build(){
    const files = [
        './dist/blog/runtime.js',
        './dist/blog/polyfills.js',
        './dist/blog/scripts.js',
        './dist/blog/main.js'
    ];

    await fs.ensureDir('elementos');
    await concat(files, 'elementos/componentes.js');
    await fs.copyFile('./dist/blog/styles.css','elementos/styles.css');

})();