const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id: ID!
        name: String!
        email: String!
        description: String
    }
    
    type Query {
        hello: String
        getAllPosts: [Post]
        getPost(id: ID): Post
    }
    
    input PostInput { 
        name: String!
        email: String!
        title: String!
        description: String
    }
    
    type Mutation {
        createPost(post)
    }
`;
module.exports = typeDefs