require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear()

const main = async() => {
     console.log('Hola Mundo');
     
     let opt = '';

     do {
          opt = await mostrarMenu();

          await pausa();
     } while( opt !== '0') {

     }
     // 
     // pausa();
}




main();