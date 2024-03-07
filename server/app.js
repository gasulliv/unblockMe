const express = require('express');
//convention for graphql
//allows react to understand graphsql
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas/TypeDefs/schema')

const app = express();


//this function instructs the app to graph from sql
//because it doesn't understand graphql, it sends it off to graphHTTP, which does
//understand it
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3500,() => {
    console.log("now listening for requests on port 3500");
});

