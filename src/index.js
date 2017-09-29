const express = require('express');
const bodyParser = require('body-parser');
// this package will handle GraphQL server reqs and res, based on your schema
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const schema = require('./schema/');
const connectMongo = require('./mongo-connector');

const start = async () => {
    const mongo = await connectMongo();

    // creating the express server
    var app = express();

    // applying graphql, bodyParser, and graphqlexpress to the entire server
    app.use('/graphql', bodyParser.json(), graphqlExpress({
        context: {mongo}, // this is how we share data/ functions between resolvers
        schema
    }));

    // setting up the playground for testing 
    app.use('/graphiql', graphiqlExpress({
        endpointURL: 'graphql',
    }));


    // giving the server a port to listen on 
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`GraphQL server running on port ${PORT}`);
    });
};

start();