const fs = require('fs');
const acorn = require('acorn');

if (process.argv.length <= 2) {
  console.log('Usage: ' + __filename + ' filename');
  process.exit(-1);
}

const file = process.argv[2];
const content = fs.readFileSync(file);

var tokens = [];
const ast = acorn.parse(content, {onToken: tokens});

var code = '';
for (let token of ast.body) {
  console.log(token);
}
