const inquirer = require('inquirer');
require('colors');

const preguntas = [
     {
          type: 'list',
          name: 'opcion',
          message: '¿Qué desea hacer?',
          choices: [
               {
                    value: '1',
                    name: '1. Crear tarea'
               },
               {
                    value: '2',
                    name: '2. Listar tareas'
               }
          ]
     }
]

const inquirerMenu = async() => {

     // console.clear();
     console.log('========================='.green);
     console.log('  Seleccione una opción  '.yellow);
     console.log('=========================\n'.green);
     
     const opt = await inquirer.prompt(preguntas);

     return opt;
}    

module.exports = {
     inquirerMenu
} 
