
const express = require ('express');

const clientCont = require ('../controller/clientsController');

const route = express.Router();

// route.get('/clients', clientCont.getclients);

// route.get('/client', clientCont.getClient);

// route.post('/signUp', clientCont.postedClient);

route.delete('./deleteUser', clientCont.delclient);

module.exports = route;