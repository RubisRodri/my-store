const express= require('express')
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hola mi server listening')
})








  // app.get('/users', (req, res) =>{
  //     res.json([

  //       {
  //         name:"Rubis",
  //         Apellido:"Rodriguez",
  //       },
  //       {
  //         name:"Arturo",
  //         Apellido:"Lopez"
  //       },
  //       {
  //         name:"Jose Luis",
  //         Apellido:"Cermeño"
  //       }
  //     ])
  //     })

   

  // app.get('/categories/:categoryId/products/:productId'), (req, res) =>{
  //   const { categoryId, productId } = req.params;
  //   console.log(categoryId, productId)
  //   res.json(
  //     {
  //       categoryId,
  //       productId,
  //       hola:"hola"
  //     }
  //   )}

  routerApi(app);

app.listen(port, ()=>{
  console.log('mi port' + port)
});
