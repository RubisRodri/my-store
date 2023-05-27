const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola mi server listening')
})

app.get('/products', (req, res) =>{
  const products = [];
  for (let index = 0; index < 100; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      email: faker.internet.email(),
      sex: faker.person.sexType(),
    });
  }
  res.json( products);
  })

  app.get('/categories', (req, res) =>{
    res.json([
      {
        categories:"primiun"
      }
    ])
    })

    app.get('/categories/:categoryId', (req, res) =>{
      const {categoryId} = req.params;
      res.json([
        {
          categories:"primiun",
          categoryId
        }
      ])
      })

  app.get('/products/:id', (req, res) =>{
    const { id } = req.params;
    res.json(
      {
        id,
        name:"chocolate",
        price:"1000"
      }
    )
  })

  app.get('/users', (req, res) =>{
    const { limit, offset } = req.query;
    if(limit && offset) {
      res.json({
        limit,
        offset
      });
    } else {
      res.send('No hay parametros');
    }
  });
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

    app.get('/users/:id', (req, res) =>{
      const { id } = req.params
      res.json(
        {
          id,
          name:'jose luis',
          mensage:"Hola"
        }
      )
    })

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

app.listen(port, ()=>{
  console.log('mi port' + port)
});
