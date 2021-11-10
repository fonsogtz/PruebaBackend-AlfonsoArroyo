const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
//Orders
//List Orders
router.get('/orders', (req, res) =>{
    fetch('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/getOrders')
    .then(response =>{
         return response.json();
    })
    .then(json => {
        res.json(json);
    }); 
 });
//Add Orders
 router.put('/add-order', (req, res) => {

    fetch('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/createOrder', {
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
//Update Orders
router.post('/edit-order', (req, res) => {
  
    fetch('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/updateOrder', {
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
module.exports = router;