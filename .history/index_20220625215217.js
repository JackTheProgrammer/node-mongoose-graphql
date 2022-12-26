const express = require("express");
const { ApolloServer } = require("apollo-server-express")

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })
    const app = express()

    await server.start();
    server.applyMiddleware({ app: app });

    app.use
    app.use((req, res) => {
        res.send(req.body)
    });
}
await startServer()