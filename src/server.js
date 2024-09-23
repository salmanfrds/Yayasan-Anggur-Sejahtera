const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.listen(3000, () =>{
    console.log('Server running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send("hello from node api");
})