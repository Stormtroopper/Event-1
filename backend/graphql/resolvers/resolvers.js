import { userProvider } from "../providers/user_provider";
import { fileProvider } from "../providers/file_providers";

export const resolvers = {
  Query: {
    getExtraction: async () => {
      return fileProvider.getExtraction();
    },

    getExtractionById: async (_, args) => {
      return fileProvider.getExtractionById(args.id);
    },

    getUsers: async () => {
      return userProvider.getUsers();
    },

    getUserById: async (_, args) => {
      return userProvider.getUserById(args.id);
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      return userProvider.createUser(args);
    },

    updateUser: async (_, args) => {
      return userProvider.updateUser(args);
    },

    loginUser: async (_, args) => {
      return userProvider.loginUser(args);
    },

    deleteUser: async (_, args) => {
      return userProvider.deleteUser(args.id);
    },

    deleteExtraction: async (_, args) => {
      return fileProvider.deleteExtraction(args.id);
    },
  },
};