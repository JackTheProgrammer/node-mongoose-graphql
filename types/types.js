const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id: ID
        name: String
        email: String
        title: String
        description: String
    }
    
    type Query {
        hello: String
        getAllPosts: [Post]
        getPost(id: ID): Post
    }
    
    input PostInput { 
        name: String
        email: String
        title: String
        description: String
    }
    
    type Mutations {
        createPost(post: PostInput): Post
        deletePost(id: ID): String
        updatePost(id: ID, post: PostInput): Post
    }
`;
module.exports = typeDefs