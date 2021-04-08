const fs = require('fs');

// Interacciones con la base de datos
const archivo = './db/data.json';

const guardarDB = ( data ) => {
     fs.writeFileSync( archivo, JSON.stringify(data) ); //<=== Convierte un objeto en un string
}

const leerDB = () => {

     // Preguntar si existe la base de datos
     if( !fs.existsSync(archivo) ){
          return null;
     }
     fs.readFileSync( archivo, JSON.parse(data) );
}

module.exports = { 
     guardarDB
} 