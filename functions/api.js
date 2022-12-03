const express = require('express');

const app = express();

app.get('/' , (res,req) =>{
    res.json({
        'path':'Home',
        'firstName': 'B',
        'lsatName': 'A'
    });

});

app.get('/json' , (res,req) =>{
    res.json({
        'path':'json',
        'author': 'BB BB'
    });

});


module.exports.handler = serverless(app);

