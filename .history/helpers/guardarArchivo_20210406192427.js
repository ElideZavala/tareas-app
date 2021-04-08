const fs = require('fs');

// Interacciones con la base de datos
const archivo = './db/data.json';

const guardarDB = ( data ) => {
     fs.writeFileSync( archivo, JSON.stringify(data) ); //<=== Convierte un objeto en un string
}

const leerDB = () => {

     // Preguntar si existe la base de datos.
     if( !fs.existsSync(archivo) ){
          return null;
     }
     
     // Leer la base de datos de manera asincrona.
     const info = fs.readFileSync( archivo, { encoding: 'utf-8' } );
     console.log(info);

     return null;
}

module.exports = { 
     guardarDB,
     leerDB
} 
