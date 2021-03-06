require('colors');

const { guardarDB } = require('./helpers/guardarArchivo')
const { 
          inquirerMenu,
          pausa,
          leerInput 
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async() => {
     
     let opt = '';
     const tareas = new Tareas();

     do {
          // Imprimir el meni
          opt = await inquirerMenu();
          
          switch (opt) {
               case '1':
                    // Crear opcion
                    const desc = await leerInput('Descripción:');
                    tareas.crearTarea( desc );
               break;

               case '2':
                    console.log( tareas.listadoArr );
               break;

        
          }

          // guardarDB( tareas.listadoArr );

          await pausa();

     } while( opt !== '0') {

     }
     
}

main();