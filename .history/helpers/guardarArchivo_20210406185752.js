const fs = require('fs');

const guardarDB = ( data ) => {

     const archivo = './db/data.txt';

     fs.writeFileSync( archivo, JSON.stringify(data) ); //<=== Convierte un objeto en un string
}

module.exports = { 
     guardarDB
} 