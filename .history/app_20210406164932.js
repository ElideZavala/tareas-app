require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {
     console.log('Hola Mundo');
     
     let opt = '';
     const tareas = new Tareas();

     do {
          opt = await inquirerMenu();
          console.log({ opt });

          console.log(tareas);

          await pausa();

     } while( opt !== '0') {

     }
     
}

main();