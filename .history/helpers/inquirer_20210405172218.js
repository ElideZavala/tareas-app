const inquirer = require('inquirer');
require('colors');

const preguntas = [
     {
          type: 'list',
          name: 'opcion',
          message: '¿Qué desea hacer?',
          choices: ['opt1', 'opt2', 'opt3']
     }
]

inquirerMenu = async() => {
     console.clear();
     console.log('========================='.green);
     console.log('  Seleccione una opción  '.yellow);
     console.log('=========================\n'.green);
     
     const opt = await inquirer.prompt(preguntas);

     return opt;
}    

module.exports = {
     inquirerMenu
} 
