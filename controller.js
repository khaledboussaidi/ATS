const { Router } = require('express')
const express = require('express');
const heros = require('./models/heros');
const thumbnail = require('./models/thumbnail');
const router = express.Router()




router.get('/get-from-marvel',async(req,res)=>{
    //const num=req.body.number
    const https = require('http');

https.get('https://gateway.marvel.com:443/v1/public/characters?apikey=99a1ed54851065f4c0f8e5275cebd427&hash=c6ba8c70231271cbd20a52c2f10a3f1c&ts=1', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    array=JSON.parse(data)["data"]["results"]
   array.forEach(element => {
  //save image url 
        const rev= new thumbnail({
            path:element["thumbnail"]["path"],
            extension:relement["thumbnail"]["extension"],
        })
        //const savedthumbnail=  rev.save()
       // save hero %%%%%%%%%%
       const pd=new heros({
           name: element["name"],
           description: element["description"],
           modified: element["modified"],
           thumbnail: thumbnail._id,
       })
       //const saveProduct =  pd.save()
       //console.log(element)

       res.send({heros});

       
   });
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

    
      
})
module.exports = router