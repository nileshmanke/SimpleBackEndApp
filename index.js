const express = require('express');
require('dotenv').config()
const app = express();

const port=process.env.PORT
// Define a simple GET request
app.get('/', (req, res) => {
    res.send('Hello, World! hello nilesh');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/about', (req,res)=>{
    res.send("this is about page hiii nilesh heloo abhishek")
})