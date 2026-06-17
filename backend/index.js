import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@as-integrations/express5';
import { typeDefs } from './graphql/typeDefs/typeDefs.js';
import { resolvers } from './graphql/resolvers/resolvers.js';
import mongoose from 'mongoose';
import { User } from './model/user.js';
const app = express();
const mongoUri = process.env.MONGO_URI;
console.log(mongoUri);

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
if (!mongoUri) {
    process.exit(1);
}
const port = process.env.PORT || 5555;
mongoose.connection.on("error", (error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
})
mongoose.connection.on('connected', () => {
    console.log('MongoDb connected..!')
})
mongoose.connection.on('disconnected', () => {
    console.log('MongoDb disconnected..!')
})
// -----------------------------
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});
async function startServer() {
    await mongoose.connect(mongoUri);

    await apolloServer.start();
    app.get('/', (req, res) => {
        res.json({
            message: 'PDF Text Extractor API is running',
        });
    });

    // // REST upload/download routes
    // app.use('/api/files', fileRoutes);

    // GraphQL route
app.use(
  "/graphql",
  expressMiddleware(apolloServer, {
    context: async ({ req }) => {
      const authHeader = req.headers.authorization || "";

      if (!authHeader.startsWith("Bearer ")) {
        return {
          user: null,
          userId: null,
        };
      }

      try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);

        return {
          user,
          userId: user?._id,
        };
      } catch (error) {
        return {
          user: null,
          userId: null,
        };
      }
    },
  })
);
    // Global error handler
    app.use((err, req, res, next) => {
        console.error(err);

        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || 'Internal server error',
        });
    });
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
startServer();

