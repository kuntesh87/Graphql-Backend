const graphql = require('graphql');
const _ = require('lodash'); 
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const books = [
    { name: 'The Legend', genre: 'Comedy', id: '1' },
    { name: 'Marvel', genre:'Sci-Fri', id:'2'}   
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }        
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            reslove(parent, args) {
                console.log('args', args.id);
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})