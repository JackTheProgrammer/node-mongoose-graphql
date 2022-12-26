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

    /** @type {string} */
    let dbUrl = process.env.ATLAS_CLUSTER
    await mongoose.connect(
        dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    console.log("Connected with DB.");

    var port = process.env.PORT
    app.listen(port, () => console.log())
}

await startServer()