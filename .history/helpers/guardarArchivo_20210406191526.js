const fs = require('fs');

// Interacciones con la base de datos
const archivo = './db/data.json';

const guardarDB = ( data ) => {
     fs.writeFileSync( archivo, JSON.stringify(data) ); //<=== Convierte un objeto en un string
}

const leerDB = () => {
     fs.readFileSync( archivo, JSON.parse(data) );
}

module.exports = { 
     guardarDB
} 