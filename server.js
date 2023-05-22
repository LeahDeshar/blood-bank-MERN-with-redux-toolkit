const express = require('express');
const router = require('./routes/testRoute');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require("./config/db")
const authRoute = require("./routes/authRoute");
const app = express();


//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

connectDB();
app.use('/api/v1',router)
app.use('/api/v1/auth',authRoute)


app.get("/",(req,res) =>
{
    res.send("hello");
})
const PORT =process.env.PORT || 3002;
app.listen(PORT,(err)=>
{
console.log(`Server running on the port ${PORT} `);
})