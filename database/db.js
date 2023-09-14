const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "camicarp1",
    database: "datos"
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error)
        return
    }
    console.log('¡Conectado a la DB MySQL!');
})

module.exports = conexion;