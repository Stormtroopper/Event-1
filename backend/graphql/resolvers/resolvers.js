import { user_provider } from "../providers/user_provider.js";
import { file_provider } from "../providers/file_providers.js";

export const resolvers = {
  Query: {
    getExtraction: async () => {
      return file_provider.getExtraction();
    },

    getExtractionById: async (_, args) => {
      return file_provider.getExtractionById(args.id);
    },

    getUsers: async () => {
      return user_provider.getUsers();
    },

    getUserById: async (_, args) => {
      return user_provider.getUserById(args.id);
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      return user_provider.createUser(args);
    },

    updateUser: async (_, args) => {
      return user_provider.updateUser(args);
    },

    loginUser: async (_, args) => {
      return user_provider.loginUser(args);
    },

    deleteUser: async (_, args) => {
      return user_provider.deleteUser(args.id);
    },

    deleteExtraction: async (_, args) => {
      return file_provider.deleteExtraction(args.id);
    },
  },
};