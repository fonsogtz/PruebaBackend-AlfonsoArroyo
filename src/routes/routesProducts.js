const { Router } = require("express");
const router = Router();

const fetch = require("node-fetch");
//Products
//List Products
router.get('/products', (req, res) =>{
   fetch('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/getProducts')
   .then(response =>{
        return response.json();
   })
   .then(json => {
       res.json(json);
   }); 
});
//Add Products
router.put('/add-product', (req, res) => {
  
    fetch('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/createProduct', {
        method: 'put',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json();
        })
      .then(json => {
            res.json(json);
        });
});

//Update Products
router.post('/edit-product', (req, res) => {
  
    fetch('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/updateProduct', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json();
        })
      .then(json => {
            res.json(json);
        });
});

//Delete Products
router.delete('/delete-product', (req, res) => {
  
    fetch('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/deleteProduct', {
        method: 'delete',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json();
        })
      .then(json => {
            res.json(json);
        });
});
 
module.exports = router;