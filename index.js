const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/circle', (req,res)=>{
    res.sendFile(__dirname + '/triangle.html');
})

app.get('/triangle', (req,res)=>{
    res.sendFile(__dirname + '/circle.html');
})

app.post('/triangle', (req,res)=>{
    const radius = req.body.radius 
    const calculate = 3.1416 * radius
    res.send(`<h2>The Radius of area is ${calculate} </h2>`)
})

app.post('/circle', (req,res)=>{
    const height = req.body.height;
    const width = req.body.width;
    const area = 0.5 * height * width
    res.send(`<h2>The Area of circle is ${area} </h2>`)
})










app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})