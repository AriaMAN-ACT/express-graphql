const express = require('express');
const expressGraphQL = require('express-graphql');

const GraphQLSchema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema: GraphQLSchema
}));

app.listen(3000, () => {
    console.log('> Ready on port 3000.');
});