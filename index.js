const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola mi server listening')
})

app.listen(port, ()=>{
  console.log('mi port' + port)
});
