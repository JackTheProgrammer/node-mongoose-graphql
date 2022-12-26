const express = require("express");
const { ApolloServer } = require("apollo-server-express")

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })
    server
    await server.start()
}
await startServer()