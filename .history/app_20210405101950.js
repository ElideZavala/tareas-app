require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear()

const main = async() => {
     console.log('Hola Mundo');
     

      try {
          await mostrarMenu();
          await pausa();
      } catch (error) {
           throw(error)
      }
}


main();