const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type 
    type Queue {
        hello: string
    }
`;
module.exports = typeDefs