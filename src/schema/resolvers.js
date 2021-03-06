// the resolvers tell the query what to actually do

const links = [
  {
    id: 1,
    url: 'http://graphql.org/',
    description: 'The Best Query Language'
  },
  {
    id: 2,
    url: 'http://dev.apollodata.com',
    description: 'Awesome GraphQL Client'
  },
];

module.exports = {
    Query: {
        allLinks: async (root, data, {mongo: {Links}}) => {
            return await Links.find({}).toArray();
        }
    },

    Mutation: {
        createLink: async (root, data, {mongo: {Links}}) => {
            const response = await Links.insert(data);
            return Object.assign({id: response.insertedIds[0]}, data);
        }
    },

    Link: {
        // this is to handle when mongo adds ids that are accessed by _id
        id: root => root._id || root.id
    }
}