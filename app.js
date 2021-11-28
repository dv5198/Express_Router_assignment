//Product Management using express router
const express = require('express')
const app = express()
const port = 5000
app.use(express.json());

const products = require('./routes/product');
const company = require('./routes/company');
const seller = require('./routes/seller');
app.get('/', (req, res) => res.send('Product Management Services'));
app.use('/product',products);
app.use('/company',company);
app.use('/seller',seller);
app.listen(port,() => {
    console.log('listening on port');
});