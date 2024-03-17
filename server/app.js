const express = require('express');
const cookieSession = require("cookie-session");
const passport = require ("passport");
const cors = require("cors");
//convention for graphql
//allows react to understand graphsql
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas/TypeDefs/schema')

const app = express();

app.use(cookieSession(
    {
        name: "session",
        keys: [""],
        maxAge: 24 * 10 * 20
    }
))

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.use(cors({
    origin:"http://localhost:3500",
    methods: "GET, POST, PUT, DELETE",
    credentials:true,
}))
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

