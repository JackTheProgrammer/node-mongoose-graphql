const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id: ID!
        name: string
        email
    }
    
    type Queue {
        hello: string
    }
`;
module.exports = typeDefs