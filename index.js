const express = require('express');
const routes = require('./routes/api.js');

// set up express app
const app = express();
// initialize routes
// app.use('/api', require('./routes/api'));
app.use('/api', routes);
// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
