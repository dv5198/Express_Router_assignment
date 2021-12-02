//Product Management using express router
const express = require('express')
const seller_data = require('./seller_data');
const app = express()
const port = 5000
//Read Data
app.get('/',(req,res) => {
    res.json(seller_data)
});
//Inserts data
app.post('/seller_insert',(req,res) => { 
    const slr=({
        id:req.params.id,
        sname:req.body.name,
        p_id:req.body.product_id,
    });
    product.save((err,data)=>{
     res.status(200).json({code:200,message:'Seller Details  Record Added Successfully',addcompany:data});
    })
});
//Update data
app.put('/seller_update:id',(req,res)=>{
    let sid=req.params.id;
    let sname=req.body.cname;
    let p_id=req.body.p_id;
    let index= seller_data.findIndex((seller_data)=>{
        return(seller_data.id===Number.parseInt(cid))
    })
    if(index>0){
        let sid=seller_details[index];
        sid.name=cnmae
        sid.product_id=p_id
        res.json(cid)
    }else{
        res.status(404)
        res.end()
    }

});
//Delete data

app.delete('/delete_data:id',(req,res)=>{
    let sid=req.params.id;
    let index= seller_data.findIndex((seller_data)=>{
        return(seller_data.id===Number.parseInt(cid))
    })
    if(index>0){
        seller_data.splice(index,1)
    }else{
        res.status(404)
        res.end()
    }
})
app.listen(port,() => {
    console.log('Seller Page');
});
