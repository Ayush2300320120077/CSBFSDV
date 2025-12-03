const express = require('express');
const app = express();
const PORT = 7878;
const cors = require('cors');
const fs = require('fs').promises;

app.use(cors());

app.use(express.json());



app.get('/', (req, res) =>
{
    res.send("<h2>Hello from the Express server!</h2>");
});

app.get('/msg',(req,res)=>
{
      res.json({msg:"this is message end point"});
})     

app.post('/register', async (req,res)=>
{
    const data = req.body.name;
    const email = req.body.email;
    const password= req.body.password;
    const arr = [];
    fs.readFile('student.js',{encoding:'utf-8'})
    arr = JSON.parse(data);
    const statue = arr.find(ele => ele.email === email);
    return res.json({msg:"This email is already registered"})
}     
    if(statue)
    {
        return res.json({msg:"This email is already registered"});
    }
    else
    {
        arr.push(req.body);
        await fs.writeFile('./student.js',JSON.stringify(arr,null,2));
        return res.json({msg:"Registration successful"});
    }
    // console.log(data);
      res.json({msg:"this is register end point"});
})

app.listen(PORT, () =>
{
    console.log("Server is running on port " + PORT);
})