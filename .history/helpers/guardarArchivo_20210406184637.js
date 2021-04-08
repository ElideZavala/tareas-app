const fs = require('fs');

const gurdarDB = ( data ) => {

     const archivo = './db/data.txt';

     fs.writeFileSync( archivo, data );
}