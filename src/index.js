const express = require('express');
const morgan = require('morgan');
const app = express();

//setting
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2)


//middleware

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Route 
app.use(require('./routes/routesProducts.js'));
app.use(require('./routes/routesOrders.js'));

//Start the server
app.listen(app.get('port'), ()=>{

    console.log('Server on port ${3000}');
});