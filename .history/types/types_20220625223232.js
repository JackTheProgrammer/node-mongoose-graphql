const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {
        id
    }
    
    type Queue {
        hello: string
    }
`;
module.exports = typeDefs