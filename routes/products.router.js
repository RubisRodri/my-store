const express = require('express');
//const faker = require('faker');

const router = express.Router();


router.get('/', (req, res) =>{
    res.json([
        {
            name:"rubis",
            apellido:'Rodriguez'
        },
        {
            name:"Ronny",
            apellido:'Aguilera'
        },
        {
            name:"Eduardo",
            apellido:'lyon'
        }
    ])
})
   

router.get('/filters', (req, res) =>{
    res.send('yo soy un filters');
})

router.get('/:id', (req, res) =>{
    const { id } = req.params;
    res.json(
      {
        id,
        name:"chocolate",
        price:"1000"
      }
    )
  })

  router.post('/', (req, res)=>{
    const body = req.body;
    res.json({
        message:'create',
        data:body
    });
  })

  module.exports = router;