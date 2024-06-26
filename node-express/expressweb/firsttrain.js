const express = require('express');
const app = express();

// Straight forward url the roo
app.get('/', function(req,res) {
	res.send('<h1>Express Welcome</h1>');
})
// Straight forward url /moon
.get('/moon', function(req,res) {
	res.send('<h2>Over the moon</h2>');
})
// A regex that must end with car
.get( /.*car$/, function (req,res) {
    res.send("You selected a car");
})
// Redirect to google
.get( '/google', function(req,res) {
    res.redirect("https://www.google.com")
})
.get( '/drink/:age', function(req,res) {
    if (req.params.age < 18) {
        res.send("Sorry you're too young")
    } else if (req.params.age >= 18 && req.params.age < 21) {
        res.send("You can drink in the UK but not in the USA")
    } else {
        res.send("You can drink what you want")
    }
});

app.listen(3000);