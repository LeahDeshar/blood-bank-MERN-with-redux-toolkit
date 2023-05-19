const express = require('express');

const app = express();
app.get("/",(req,res) =>
{
    res.send("hello");
})

app.listen(3002,(err)=>
{
console.log("Server running on the port 3002");
})