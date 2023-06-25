const express = require('express');
const app = express();
app.use(express.json());
require('./config/dbconnection.js');
const cors = require('cors');


app.use(cors());
var productRouter = require('./Routes/product');
app.use('/products', productRouter);



const port = 8000;

app.get("/",(res,resp)=>{
    resp.send("Home page");
});
console.log("server running on port ",port)

// app.listen(port)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });