const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id: ID!
        name: String!
        email: string!
        description: string
    }
    
    type Query {
        hello: String
        getAllPosts: [Post]
        getPost(id: ID): Post
    }
    
    input PostInput{
        title: String
    }
`;
module.exports = typeDefs