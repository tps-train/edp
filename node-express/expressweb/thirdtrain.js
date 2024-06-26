const express = require('express');

let logger = function(req,res, next) {
    console.log("Received request %s",req.url);
    next();
}

const app = express();
app.use(express.json());
app.use(logger);

// Note the order of our URLs now compared to using GET
app.use( '/drink/:age', function(req,res) {
    if (req.params.age < 18) {
        res.send("Sorry you're too young")
    } else if (req.params.age >= 18 && req.params.age < 21) {
        res.send("You can drink in the UK but not in the USA")
    } else {
        res.send("You can drink what you want")
    }
});
app.get( '/getme', function(req,res) {
    res.send("You sent me "+req.query.id)
});
app.post( '/sendme', async (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({PersonName: req.body.myname}));
    // res.send(req.body)
});
app.use('/', function(req,res,next) {
    console.log("Root link called");
}, function(req,res,next) {
	res.send('<h1>Express Welcome</h1>');
    next();
});

app.listen(3000);