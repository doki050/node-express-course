const express = require('express');
const app = express();

const mockUserData=[
    {name:'Mark'},
    {name:'Kovacs'}
]

app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. Nice:)',
        users: mockUserData
    })
})

app.listen(8000,function(){console.log('server is up and running.')})