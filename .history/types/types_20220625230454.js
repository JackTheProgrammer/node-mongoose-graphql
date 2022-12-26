const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id: ID!
        name: String!
        email: String!
        description: string
    }
    
    type Query {
        hello: String
        getAllPosts: [Post]
        getPost(id: ID): Post
    }
    
    input PostInput{
        name: String
        email: String
        title: String
        description
    }
`;
module.exports = typeDefs