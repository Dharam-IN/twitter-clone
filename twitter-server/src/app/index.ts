import {ApolloServer} from '@apollo/server';
import express from 'express';
import {expressMiddleware} from '@apollo/server/express4';
import bodyParser from 'body-parser';
import { prismaClient } from '../clients/db';


export async function initServer(){
    const app = express();

    app.use(bodyParser.json());

    const graphqlServer = new ApolloServer({
        typeDefs: `
            type Query {
                sayHello: String
            }
        `,
        resolvers: {
            Query: {
                sayHello: () => 'Hello from graphql Server'
            },
        }
    });

    await graphqlServer.start();

    app.use("/graphql", expressMiddleware(graphqlServer))

    return app;
}
