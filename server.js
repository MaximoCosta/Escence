const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const productos = [
  {
    id: 1,
    nombre: 'Royal Oud Intense',
    precio: 150,
    imagen: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 2,
    nombre: 'Desert Rose & Amber',
    precio: 120,
    imagen: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 3,
    nombre: 'Midnight Saffron',
    precio: 185,
    imagen: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 4,
    nombre: 'Sandalwood Majesty',
    precio: 135,
    imagen: 'https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 5,
    nombre: 'Oud Wood Reserve',
    precio: 210,
    imagen: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=800'
  },
  {
    id: 6,
    nombre: 'Golden Musk',
    precio: 95,
    imagen: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=600&h=800'
  }
];

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.get('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find((item) => item.id === id);

  if (!producto) {
    return res.status(404).send('Producto no encontrado');
  }

  res.json(producto);
});

app.use(express.static(path.join(__dirname)));

app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
