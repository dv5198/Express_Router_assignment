//Product Management using express router
const express = require('express')
const product_details = require('./product_data');
const app = express()
const port = 5000
//Read Data
app.get('/',(req,res) => {
    res.json(product_data)
});
//Inserts data
app.post('/product_insert',(req,res) => { 
   const product=({
       id:req.params.id,
       title:req.body.title,
       price:req.body.price,
       category:req.params.category,
       seller_id:req.params.seller_id
   });
   product.save((err,data)=>{
    res.status(200).json({code:200,message:'Product Record Added Successfully',addcompany:data});
   })
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
