const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { json } = require("express");

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })
    const app = express()

    await server.start();
    server.applyMiddleware({ app: app });

    app.use(express.json())
    app.use((req, res) => {
        res.send("json(req.body)")
    });
}
await startServer()