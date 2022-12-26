const express = require("express");
const { ApolloServer } = require("apollo-server-express")
const server = new ApolloServer({ typeDefs, resolvers })

await server.start()

async function startServer() {}
startServer()