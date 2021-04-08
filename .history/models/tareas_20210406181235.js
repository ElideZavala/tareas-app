const Tarea = require('./tarea');

/**
 * _listado:
*         { 'uuid-1353354-1551: {id: 12, desc: asd, completadoeEN: 884554}'},
 */


class Tareas {

     _listado = {};

     get listadoArr() {
          
     }
     
     constructor() {
          this._listado = {};     
     }

     crearTarea( desc = '' ) {

          const tarea = new Tarea(desc);
          this._listado[tarea.id] = tarea;
     }
}

module.exports = Tareas; 