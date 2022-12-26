const express = require("express");
const { ApolloServer } = require("apollo-server-express")

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })
    const app = express()
    server.applyMiddleware(app, "i")
    await server.start()
}
await startServer()