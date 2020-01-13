var express = require('express');
      
//---returns an instance of the express server---
var app = express();
      
//---parse the body of the request and set the
// body property on the request object---
var bodyParser = require('body-parser');
      
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
      
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
                  'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods',
                  'GET,PUT,POST,DELETE');
    next();
})
      
//---the array to store all the subscriber IDs---
var subscribers = []
      
app.post('/subscribers/', function(req, res) {
    //---check that the regid field is there---
    if (!req.body.hasOwnProperty('subscriptionid')){
        res.statusCode = 400;
        res.send('Error 400: Post syntax incorrect.');
        return;
    }
    console.log(req.body.subscriptionid);
    subscribers.push(req.body.subscriptionid)
    res.statusCode = 200;
    res.send('SubscriptionID received');
});
      
app.delete('/subscribers/:id', function(req, res) {
    console.log(req.params.id)
    const index = subscribers.indexOf(req.params.id)
    if (index !== -1) {
        subscribers.splice(index,1)
    }
    res.statusCode = 200;
    res.send('SubscriptionID deleted');
});
      
app.listen(8080);
console.log('Rest Service Listening on port 8080');