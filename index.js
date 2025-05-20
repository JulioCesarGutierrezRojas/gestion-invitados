// Importar Express
const express = require('express');
const cors = require('cors')

// Inicializar la aplicación Express
const app = express();
app.use(cors({ origin: '*' }))

// Definir el puerto para el servidor
const PORT = 4000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


// Endpoint para consultar visitantes
app.get('/visitantes', (req, res) => {

const matriz = [
['','','','','',''],
['','','','','',''],
['','','','','',''],
['','','','','',''],
['','','','','',''],
['','','','','','']

    ];
    })

