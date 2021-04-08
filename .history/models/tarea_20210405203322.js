const { v4: uudiv4 } = require('uuid')

class Tarea {

     id = '';
     desc = '';
     completadoEn = null;

     cosntructor( desc ) {
          
          this.desc = desc;
     }

}

module.exports = Tarea; 