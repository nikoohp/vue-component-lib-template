const fs = require('fs');
const path = require('path');

const excludes = [
    'index.js',
    'theme-chalk',
    'mixins',
    'utils',
    '.DS_Store',
    'http',
];

module.exports = function () {
    const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'));
    const packages = dirs
        .filter(dir => !excludes.includes(dir))
        .reduce((acc, dir) => {
            const pkgs = fs.readdirSync(path.resolve(__dirname, `../packages/${dir}`));

            pkgs.forEach(pkg => acc[pkg] = `./packages/${dir}/${pkg}/index.js`);

            return acc;
        }, {});
    return packages;
};