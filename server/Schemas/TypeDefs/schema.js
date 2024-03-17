const graphql = require("graphql");
const { GraphQLObjectType,
        GraphQLInt, 
        GraphQLString, 
        GraphQLSchema, 
        GraphQLID,
        GraphQLList } = graphql;
const _ = require("lodash");

//defined object types (here being user)
//this has different feilds
const UserType = new GraphQLObjectType({
    name: 'user',
    fields:() => ({
        id: {type:GraphQLID},
        username: {type:GraphQLString},
        password: {type: GraphQLString},
        stories: {
            type: new GraphQLList(StoryType),
            resolve(parent,args){
                return _.filter(stories, {authorId: parent.id})
            }
        }
    })
});

const StoryType = new GraphQLObjectType({
    name: 'story',
    fields: () => ({
        id: { type: GraphQLID },
        title : { type:GraphQLString },
        author : { type: GraphQLString },
        rating : { type: GraphQLString },
        genre : { type: GraphQLString },
        author: {
            type: UserType,
            resolve(parent, args){
                return _.find(users, {authorId: parent.id})
            }
        }
    })
});

//how we get into the graph
//user field, when someone queries user, we expect user type AND an id
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields : {
        user : {
            //when someone queries a type
            type: UserType,
            //pass argments along with the query
            args: {id: {type:GraphQLID}},
            resolve(parent, args){
                //code to get data from db or other source
                return _.find(users, {id: args.id})
            }
        },
        story: {
            //when someone queries a type
            type: StoryType,
            //pass argments along with the query
            args: {id: {type:GraphQLID}},
            resolve(parent, args){
                //code to get data from db or other source
                return _.find(stories, {id: args.id})
            }
        },
        stories: {
            type: new GraphQLList(StoryType),
            resolve(parent, args){
                return stories
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return users
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})