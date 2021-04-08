const Tarea = require('./tarea');

/**
 * _listado:
*         { 'uuid-1353354-1551: {id: 12, desc: asd, completadoeEN: 884554}'},
 */


class Tareas {

     _listado = {};

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
          console.log(this._listado);
          Object.keys(this._listado).forEach( key => {
               const tarea = this._listado[key];
               console.log(tarea);
          })

          
     }
}

module.exports = Tareas; 