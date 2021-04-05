require('colors');

const mostrarMenu = () => {

     console.clear();
     console.log('========================='.green);
     console.log('  Seleccione una opción  '.yellow);
     console.log('=========================\n'.green);

     console.log(`${'1.'.green} Crear tarea`);
     console.log(`${'2.'.green} Listar tareas`);
     console.log(`${'3.'.green} Listar tareas completadas`);
     console.log(`${'4.'.green} Listar tareas pendientes`);
     console.log(`${'5.'.green} Completar tarea(s)`);
     console.log(`${'6.'.green} Borrar tarea`);
     console.log(`${'0.'.green} Salir \n`);

     // Prepara la interfaz para mostrar y recibir informacion. 
     const readline = require('readline').createInterface({
          input: process.stdin, //Pausar y esperar Enter. 
          output: process.stdout // Mostrar Mensaje
     });

     readline.question('Seleccione una opción: ', (opt) => {
          console.log( opt );
          readline.close();
     })
}

module.exports = {
     mostrarMenu
}