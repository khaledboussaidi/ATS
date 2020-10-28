const { Router } = require('express')
const express = require('express');
const heros = require('./models/heros');
const thumbnail = require('./models/thumbnail');
const router = express.Router()




router.get('/get-from-marvel',async(req,res)=>{
    //const num=req.body.number
    const https = require('https');

https.get('https://gateway.marvel.com:443/v1/public/characters?apikey=99a1ed54851065f4c0f8e5275cebd427&hash=c6ba8c70231271cbd20a52c2f10a3f1c&ts=1', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    array=JSON.parse(data)["data"]["results"]
   array.forEach(element => {
  //save image url 
        const thum= new thumbnail({
            path:element["thumbnail"]["path"],
            extension:element["thumbnail"]["extension"],
        })
        const savedthumbnail=  thum.save()
       // save hero %%%%%%%%%%
       const hero=new heros({
           name: element["name"],
           description: element["description"],
           modified: element["modified"],
           thumbnail: thum._id,
       })
       const saveheros =  hero.save()
       console.log(hero)
       

       
   });
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

    
      
})

router.get('/heros',async(req,res)=>{
    try{
      const products = await heros.find({})
        .skip(Number(req.query.page))
        .limit(1)
      res.send({products});
      console.log(req.query.page)
    }catch(err){

        res.send("Error "+err)
    }
})

router.get('/heros/:id',async(req,res)=>{
    try{
  
      const p= await heros.findById(req.params.id)
      res.send(p);
  
    }catch(err){
  
        res.send("Error "+err)
    }
  })

router.get('/thumbnail',async(req,res)=>{
    try{
      const r = await thumbnail.find(req.body)
      console.log(req.body)
      res.send(r);
  
    }catch(err){
        
        res.send("Error "+err)}
    })
module.exports = router