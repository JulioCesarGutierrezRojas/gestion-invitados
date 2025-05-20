// Importar Express
const express = require('express');
const cors = require('cors')
const db = require('./connection'); 
const path = require('path');

// Inicializar la aplicación Express
const app = express();
app.use(cors({ origin: '*' }))
app.use(express.json());

// Definir el puerto para el servidor
const PORT = 4000;

app.post('/registro', async (req, res) => {
  const { nombre, motivo } = req.body;

  if (!nombre || !motivo) {
    return res.status(400).json({ mensaje: 'Nombre y motivo son obligatorios' });
  }

  try {
    const horaEntrada = new Date(); 
    const sql = 'INSERT INTO usuarios (nombre, motivo, hora_entrada) VALUES (?, ?, ?)';
    await db.query(sql, [nombre, motivo, horaEntrada]);

    res.status(201).json({ mensaje: 'Registro guardado con éxito' });
  } catch (error) {
    console.error('Error al insertar:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});


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