const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id: ID!
        name: string!
        email: string!
        description: string
    }
    
    type Queue {
        hello: string
        getAllPosts: [Post]
        
    }
`;
module.exports = typeDefs