const express = require('express');
const bodyParser = require('body-parser');

// this package will handle GraphQL server reqs and res, based on your schema
const {graphqlExpress} = require('apollo-server-express');

const schema = require('./schema/');

// creating the express server
var app = express();

// applying graphql, bodyParser, and graphqlexpress to the entire server
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

// giving the server a port to listen on 
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`GraphQL server running on port ${PORT}`);
});