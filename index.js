// Importar Express
const express = require('express');
const cors = require('cors')
const path = require('path');

// Inicializar la aplicación Express
const app = express();
app.use(cors({ origin: '*' }))

// Definir el puerto para el servidor
const PORT = 4000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FormularioRegistro.html'));
});

app.get('/consultar', (req, res) => {
    res.sendFile(path.join(__dirname, 'consultar.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});