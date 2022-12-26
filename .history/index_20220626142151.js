const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("apollo-server-express")
const typeDefs = require("./types/types");
const resolvers = require("./resolvers/resolvers");

async function startServer() {
    const server = new ApolloServer({ typeDefs: ty, resolvers: resolvers });
    const app = express();

    await server.start();
    server.applyMiddleware({ app: app });

    app.use((req, res) => {
        res.send("First served content")
    });

    dotenv.config({ path: "./config/config.env" });

    /**
     * @type {string}
     */
    let dbUrl = process.env.ATLAS_CLUSTER
    await mongoose.connect(
        dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    console.log("Connected with DB.");

    /** @type {number} */
    let port = process.env.PORT || 5535;
    app.listen(port, () => console.log(`Running at port: ${port}`));
}
startServer();