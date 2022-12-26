const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Post {}
    
    type Queue {
        hello: string
    }
`;
module.exports = typeDefs