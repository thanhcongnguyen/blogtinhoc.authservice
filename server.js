'use strict';

const express = require('express');

// Constants
const PORT = 3000;


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Comming soon!\n');
});

app.listen(PORT, function(){
  console.log(`server running with port ${PORT}`)
});
