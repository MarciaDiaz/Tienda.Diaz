
const Contenedor = require("./classContenedor");
const fs = require("fs");


//requerimos express
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


const contenedor = new Contenedor('productos.json');

app.use('public', express.static(__dirname + 'public'));

 app.get('/', (req, res) =>{
  res.send('<h1>holaa</h2>')
 })

  //TODOS LOS PRODUCTOS

app.get('/api/productos', async(req, res) => {
    /* Pido todos los productos */
    const productos = await contenedor.getAll();

    res.send(productos);
})


//POSTEAR PRODUCTO

app.post('/api/productos', (req, res) =>
{
  const  {body } = req;
  console.log(body);
  res.json('ok')
});

//PRODUCTO por ID

app.get('/api/productos/:id', (req, res) =>{
  const { id } = req.params;
  
const productosEncontrado = productos.find((productos)=> productos.id);
  res.json('ok')
});

//PUT, modificar

app.put('/api/productos/:id', (req, res) => {
   const id = req.params.id;
   const body = req.body;
   const idencontrado = productos.findIndex((productos) => productos.id == id)
   console.log(idencontrado)
   res.json('ok');
})

//DELETE, eliminar

app.delete('/api/productos/id', (req, res) =>{
  const { id } = req.params;
  productos = productos.filter((productos) => productos.id !=id);
  res.json(productos)
});







app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})