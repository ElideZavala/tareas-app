const Tarea = require('./tarea');

/**
 * _listado:
*         { 'uuid-1353354-1551: {id: 12, desc: asd, completadoeEN: 884554}'},
 */


class Tareas {

     _listado = {};
     
     constructor() {
          this._listado = {};     
     }

     crearTarea( desc = '' ) {

          const tarea = new Tareas();
     }
}

module.exports = Tareas;