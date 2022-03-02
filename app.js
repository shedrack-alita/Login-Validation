

    const express = require('express');

    const app = express();

    const port = 2022;

    const bodyParser = require('body-parser');
    
    // parse application

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    const clientRoute = require('./src/routes/clientsRouter')
    
    app.use(clientRoute)

    // Request port and callback function

    app.listen(port,() => {
    console.log('server listening to port' + ' ' + port); 

})    
