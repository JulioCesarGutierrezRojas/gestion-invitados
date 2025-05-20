const mysql = require('mysql')

//Crea un Pool de Conexiones con un Limite de 5
const conexion = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'visitantes',
    port: 3306
})

//Funcion para recibir las peticiones SQL, acceder a la BD y Ejecutarlas
const query = (sql, params) => {
    return new Promise ((resolve, reject) => {
        conexion.getConnection((err, conn) => {
            if (err) {
                reject(err);
                return;
            }
            conn.query(sql, params, (err, rows) => {
                if (err) {
                    conn.release();
                    reject(err);
                    return;
                }
                conn.release();
                resolve(rows);
            });
        });
    });
}

module.exports = {
    query
}