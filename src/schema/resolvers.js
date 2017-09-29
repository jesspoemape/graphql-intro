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
        allLinks: () => links,
    },
    Mutation: {
        createLink: (_, data) => {
            // here we are accessing the arguments that were passed with the mutation
            const newLink = Object.assign({id: links.length + 1}, data);
            links.push(newLink);
            return newLink;
        }
    }
}