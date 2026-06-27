const express = require('express');
const app = express();

app.use(express.json());

// Lista global en memoria para simular la base de datos temporal
let reportes = [];

// Ruta GET: Devuelve el listado completo de los reportes acumulados
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST: Recibe datos nuevos, les asigna un ID automático y los guarda en el array
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});