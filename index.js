const express = require('express');

// set up express app
const app = express();

app.get('/api', function(req, res){
  res.send({ name: 'Yoshi' });
});
app.get("/", function(req, res) {
    console.log("Get Request.");
    res.end();
})
// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
