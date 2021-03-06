//Product Management using express router
const express = require('express')
const company_data = require('./company_data');
const app = express()
const port = 5000
//Read Data
app.get('/',(req,res) => {
    res.json(company_data)
});
//Inserts data
app.post('/company_insert',(req,res) => { 
    
    const cmp=new company({
        id:req.params.id,
        name:req.params.name,
        product_id:req.params.product_id
    })
    cmp.save((err,data)=>{
        res.status(200).json({code:200,message:'Company Record Added Successfully',addcompany:data});
    });
});
//Update data
app.put('/company_update:id',(req,res)=>{
    let cid=req.params.id;
    let cname=req.body.cname;
    let p_id=req.body.p_id;
    let index= company_data.findIndex((company_data)=>{
        return(company_data.id===Number.parseInt(cid))
    })
    if(index>0){
        let cid=company_details[index];
        cid.name=cnmae
        cid.product_id=p_id
        res.json(cid)
    }else{
        res.status(404)
        res.end()
    }

});
//Delete data

app.delete('/delete_data:id',(req,res)=>{
    let cid=req.params.id;
    let index= company_data.findIndex((company_data)=>{
        return(company_data.id===Number.parseInt(cid))
    })
    if(index>0){
        company_data.splice(index,1)
    }else{
        res.status(404)
        res.end()
    }
})
app.listen(port,() => {
    console.log('Company Page');
});
