// Importar Express
const express = require('express');
const cors = require('cors')
const { query } = require('./connection');

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
app.get('/visitantes', async (req, res) => {
  try {
    const [rows] = await query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener visitantes:', err);
    res.status(500).json({ error: 'Error al obtener visitantes' });
  }
});

