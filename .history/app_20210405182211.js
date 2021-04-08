require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear()

const main = async() => {
     console.log('Hola Mundo');
     
     let opt = '';

     do {
          opt = await inquirerMenu();
          console.log({ opt });
          
          sld = await pausa();
          console.log({ sld })

     } while( opt !== '0') {

     }
     
}

main();