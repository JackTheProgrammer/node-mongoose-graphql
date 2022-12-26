const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id: ID!
        name: str
    }
    
    type Queue {
        hello: string
    }
`;
module.exports = typeDefs