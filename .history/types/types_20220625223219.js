const { gql } = require("apollo-server-express");
const typeDefs = gql `
    ty
    type Queue {
        hello: string
    }
`;
module.exports = typeDefs