//Product Management using express router
const express = require('express')
const product_details = require('./product_details');
const app = express()
const port = 5000
//Read Data
app.get('/',(req,res) => {
    res.json(product_data)
});
//Inserts data
app.post('/product_insert',(req,res) => { 
    const prd={
        id=prd.length+1,
        ptitle:req.body.product_title,
        price:req.body.price,
        category:req.body.category,
        seller_id:req.body.seller_id
    }
    product_data.push(prd)
    res.json(prd)
});
//Update data
app.put('/products_update:id',(req,res)=>{
    let pid=req.params.id;
    let product_title=req.body.product_title;
    let price=req.body.price;
    let category=req.body.category;
    let seller_id=req.body.seller_id;
    let index= product_data.findIndex((product_data)=>{
        return(product_data.id===Number.parseInt(pid))
    })
    if(index>0){
        let prd=product_data[index];
        prd.product_title=ptitle
        prd.price=price
        prd.category=category
        prd.seller_id=seller_id
        res.json(prd)
    }else{
        res.status(404)
        res.end()
    }

});
//Delete data

app.delete('/delete_data:id',(req,res)=>{
    let pid=req.params.id;
    let index= product_details.findIndex((product_details)=>{
        return(product_data.id===Number.parseInt(pid))
    })
    if(index>0){
        product_data.splice(index,1)
    }else{
        res.status(404)
        res.end()
    }
})
app.listen(port,() => {
    console.log('Product Page');
});