const Tarea = require('./tarea');
require('colors');

/**
 * _listado:
*         { 'uuid-1353354-1551: {id: 12, desc: asd, completadoeEN: 884554}'},
 */


class Tareas {

     _listado = {
          'abc': 123
     };

     get listadoArr() {

          const listado = [];
          // Extraer cada una de las llaves que se encuentren en un objeto
          Object.keys(this._listado).forEach( key => {
               const tarea = this._listado[key];
               listado.push( tarea );
          }) // Nos regresara una rreglo de todas las llaves

          return listado
     }
     
     constructor() {
          this._listado = {};     
     }

     borrarTarea( id = '') {
          if( this._listado[id] ) {
               delete this._listado[id];
          }
     }

     cargarTareasFromArray( tareas = [] ) {
          
          tareas.forEach( tarea => {
               this._listado[tarea.id] = tarea;
          });
     }

     crearTarea( desc = '' ) {

          const tarea = new Tarea(desc);
          this._listado[tarea.id] = tarea;
     }
     
     listadoCompleto() {
          
          console.log();
          this.listadoArr.forEach( (tarea, i)=> {

               const idx = `${i + 1}.`.green;
               const { desc, completadoEn } = tarea;
               const estado = ( completadoEn )
                                   ? 'Completada'.green
                                   : 'Pendiente'.red
               console.log(`${idx} ${desc} :: | ${estado}`);
               
          })
     }

     listarPendientesCompletadas( completadas = true ) {
          
          console.log();
          let contador = 0;
          this.listadoArr.forEach( (tarea )=> {

               const { desc, completadoEn } = tarea;
               const estado = ( completadoEn )
                                   ? 'Completada'.green
                                   : 'Pendiente'.red;
               if ( completadas ) {
                    // mostrar completadas
                    if ( completadoEn ) {
                         contador += 1;
                         console.log(`${ `${contador.toString()}.`.green } ${desc} :: ${ completadoEn.green }`);
                    }
               } else {
                    // mostrar pendientes
                    if ( !completadoEn ) {
                         contador += 1;
                         console.log(`${ `${contador.toString()}.`.green } ${desc} :: ${estado}`);
                    }
               }
               
          })
     }

     toggleCompletadas( ids = [] ) {
          
          ids.forEach( id => {
               const tarea =  this._listado[id];
               if ( !tarea.completadoEn ) {
                    tarea.completadoEn = new Date().toISOString()  // <== Genera la fecha completamente
               }

          });
          
          this.listadoArr.forEach( tarea => {

               // Verificar si en el arreglo id existe o incluye la tarea.id
               if( !ids.includes(tarea.id) ){
                    this._listado[tarea.id].completadoEn = null;
               }
          })
     }
}

module.exports = Tareas; 