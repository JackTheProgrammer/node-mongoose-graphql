const { gql } = require("apollo-server-express");
const typeDefs = gql `
    type Queue {
        hello: string
    }
`;
module.exports