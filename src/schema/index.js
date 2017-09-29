// graphql tools provide tools to build graphql servers

const {makeExecutableSchema} = require('graphql-tools');

// Define your types here
const typeDefs = `
    type Link {
        id: ID!
        url: String!
        description: String!
    }
`;

// generate the schema object from your types definition
module.exports = makeExecutableSchema({typeDefs});
// make executable schema takes a string in the schema definition 
// language and returns a complete GraphQLSchema object to be used by your server.