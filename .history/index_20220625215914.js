const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })
    const app = express()

    await server.start();
    server.applyMiddleware({ app: app });

    app.use((req, res) => {
        res.send("json(req.body)")
    });

    let dbUrl = process.env.ATLAS_URL
    await mongoose.connect()
}
await startServer()