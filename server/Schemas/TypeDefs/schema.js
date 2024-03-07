const graphql = require("graphql");
const { GraphQLObjectType,
        GraphQLInt, 
        GraphQLString, 
        GraphQLSchema, 
        GraphQLID,
        GraphQLList } = graphql;
const _ = require("lodash");

let users = [
    { username: 'Astarion', password: 'Worship!Me123', id: '1'},
    { username: 'Gale', password: 'Book!Lover345', id: '2'},
    { username: 'Laezel', password: 'Betterthan!You23', id: '3'}
]

let stories = [
    { title: 'Confessions of a Vampire', author: 'Astarion', rating: 'M', genre: 'Horror', id: '1', authorId: '1'},
    { title: 'Magical Theory for the absolute beginner', author: 'Gale', rating: 'E', genre: 'Non-Fiction', id: '2', authorId: '2'},
    { title: 'The Glories of Queen Vlaakith', author: 'Laezel', rating: 'T', genre: 'Mythology', id: '3', authorId: '3'},
    { title: 'The Sights and Sounds of Faerun', author: 'Gale', rating: 'E', genre: 'Non-Fiction', id: '4', authorId: '2'},
    { title: 'Confession of a courtesan', author: 'Astarion', rating: 'M', genre: 'Mythology', id: '5', authorId: '1'},
    { title: 'The story of a Tressym', author: 'Gale', rating: 'E', genre: 'Fiction', id: '6', authorId: '2'}

]

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
                return _.filter(users, {authorId: parent.id})
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
                console.log(parent);
                return _.find(users, {id: parent.authorId})
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
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})