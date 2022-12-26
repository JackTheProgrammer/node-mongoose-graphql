const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id: ID!
        name: string!
        email: string!
        description: string
    }
    
    type Query {
        hello: string
        getAllPosts: [Post]
        getPost(id: ID): Post
    }
    
    input PostInput{
        title
    }
`;
module.exports = typeDefs