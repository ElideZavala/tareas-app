require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');

console.clear()

const main = async() => {
     console.log('Hola Mundo');
     
     let opt = '';

     do {
          // opt = await inquirerMenu();
          // console.log({ opt });
          
          const tarea = new Tarea('Compra comida');

          await pausa();

     } while( opt !== '0') {

     }
     
}

main();