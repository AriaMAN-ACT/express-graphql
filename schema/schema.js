const GraphQL = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = GraphQL;

const users = [
    {
        id: '1',
        firstName: 'Aria',
        lastName: 'Azadi Pour',
        age: 16
    },
    {
        id: '2',
        firstName: 'Andia',
        lastName: 'Azadi Pour',
        age: 6
    }
];

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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});