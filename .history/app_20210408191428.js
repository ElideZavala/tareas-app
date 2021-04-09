require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const { 
          inquirerMenu,
          pausa,
          leerInput,
          listadoTareasBorrar,
          confirmar
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async() => {
     
     let opt = '';
     const tareas = new Tareas();

     const tareasDB = leerDB();;

     if ( tareasDB ) { // cargar tareas
          tareas.cargarTareasFromArray(tareasDB);          
     }

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
                    tareas.listadoCompleto();
               break;
               
               case '3': // Listar completadas
                    tareas.listarPendientesCompletadas(true);
               break;

               case '4': // Listar Pendientes
                    tareas.listarPendientesCompletadas(false);
               break;

               case '6': // Borrar 
                    const id = await listadoTareasBorrar( tareas.listadoArr );
                    const ok = await confirmar('¿Está seguro');
                    // TODO: pregunTar si está seguro
                    console.log({ ok });
               break;
          }

          guardarDB( tareas.listadoArr );

          await pausa();

     } while( opt !== '0') {

     }
     
}

main();