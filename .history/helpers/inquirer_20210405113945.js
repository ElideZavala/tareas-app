const inquirer = require('inquirer');
require('colors');

const menuOpts = 

inquirerMenu = async() => {
     console.clear();
     console.log('========================='.green);
     console.log('  Seleccione una opción  '.yellow);
     console.log('=========================\n'.green);
     
     await inquirer.prompt([])
}    

module.exports = {
     inquirerMenu
} 
