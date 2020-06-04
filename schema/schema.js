const GraphQL = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = GraphQL;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
});