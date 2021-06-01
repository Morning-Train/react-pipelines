const fs = require('fs')

if(!fs.existsSync('./dist')) {
  throw new Error('Dist folder does not exist')
}

if(!fs.existsSync('./dist/es')) {
  throw new Error('Dist folder does not have es folder')
}

if(!fs.existsSync('./dist/cjs')) {
  throw new Error('Dist folder does not have cjs folder')
}

if(fs.existsSync('./dist/es/node_modules') || fs.existsSync('./dist/cjs/node_modules')) {
  throw new Error('Dist folder has a node_modules folder')
}