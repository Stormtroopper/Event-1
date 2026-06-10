import {File} from '../../model/file.js';
import {User} from '../../model/user.js'
import createToken from './auth/authenticate.js';
export const resolvers = {
    Query: {
        getExtraction: async () => {
            return await File.find().sort({ createdAt: -1 });
        },
        getExtractionById: async (_, args) => {
            return File.findById(args.id);
        },
        getUsers: async () => {
            return await User.find().sort({ createdAt: -1 });
        },
        getUserById: async (_, args) => {
            return await User.findById(args.id);
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            const checkExisting = await User.findOne({ email: args.email });
            if (checkExisting) {
                throw new Error("Email already exists");
            }
            const hashedPassword = await bcrypt.hash(args.password, 10);
            const newUser = new User({
                name: args.name,

                email: args.email,
                password: hashedPassword
            });
            return await newUser.save();
        },
        updateUser: async (_, args) => {
            const { id, ...updates } = args;
            const upUser = await User.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true });
            if (!upUser) {
                throw new Error(`User with ${id} not found`);
            }
            return upUser;
        },
        loginUser: async (_, args) => {
            const { email, password } = args;
            const loggedInUser = await User.findOne({ email }).select('+password');
            if (!loggedInUser) {
                throw new Error("Invalid email or password");
            }
            const isMatch = await bcrypt.compare(password, loggedInUser.password);
            if (!isMatch) { throw new Error("Passwords dont match"); }
            loggedInUser.lastLogin = new Date();
            await loggedInUser.save();
            const token = createToken(loggedInUser);
            loggedInUser.password = undefined;
            return {
                token, loggedInUser
            }
        },
        deleteUser: async (_, args) => {
            const { id } = args;
            const delUser = await User.findByIdAndDelete(id);
            if (!delUser) {
                throw new Error(`User with ${id} not found`);
            }
            return delUser;
        }, deleteExtraction: async (_, args) => {
            const { id } = args;
            const delFile = await File.findByIdAndDelete(id);
            if (!delFile) {
                throw new Error(`File with ${id} not found`);
            }
            return delFile;
        }
    }
}