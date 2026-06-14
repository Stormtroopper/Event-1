import bcrypt from 'bcrypt';
import { user_services } from '../services/user_services';
import createToken from '../resolvers/auth/authenticate';

export const user_provider = {
    async getAllUsers() {
        try {
            return user_services.findAllUsers();
        }
        catch (error) {
            console.error(`Error fetching all users: ${error}`);
        }
    },
    async getUsersById(id) {
        try {
            const user = user_services.findUserbyId();
            if (!user) throw new Error(`User${id} not valid`);
            return user;
        }
        catch (error) {
            console.error(`Error fetching user by id: ${error}`);

        }
    },
    async createUser(args) {
        try {
            const existing_user = user_services.findUserByEmail(args.email);
            if (existing_user) {
                throw new Error("Email exists you noob")
            }
            const hashedPassword = await bcrypt.hash(args.password, 15);
            return user_services.createUser({
                name: args.name,
                email: args.email,
                password: hashedPassword
            })
        }
        catch (error) {
            console.error(`Error creating a new user${args.name}`);

        }
    },
    async updateUser(args) {
        try {
            const { id, ...update } = args;
            const updated_user = user_services.updateUser(id, update);
            if (!updated_user) {
                throw new Error('User not found');
            }
            return updated_user;
        }
        catch (error) {
            console.error(`Error updating user ${args.id}`);
        }
    },
    async loginUser(args) {
        try {
            const { email, password } = args;
            const loggedInUser = await user_services.findUserByEmailWithPassword(email);
            if (!loggedInUser) throw new Error(`${email} user doesnt exist`);
            const password_match = await bcrypt.compare(password, loggedInUser.password);
            if (!password_match) throw new Error(`${password}'s dont match!Try Again dumbass`)

            loggedInUser.lastLoginAt = new Date();
            await loggedInUser.save();
            const token = createToken(loggedInUser);
            loggedInUser.password = undefined;
            return {
                token, user: loggedInUser
            }
        }
        catch (error) {
            console.error(`Error Logging in user ${args.email}}`);
        }
    },
    async deleteUser(id) {
        try {

            const deletedUser = await user_services.deleteUser(id);

            if (!deletedUser) {
                throw new Error(`User with ${id} not found`);
            }

            return deletedUser;
        }
        catch (error) {
            console.error('Unable to delete the user');

        }
    },
} 