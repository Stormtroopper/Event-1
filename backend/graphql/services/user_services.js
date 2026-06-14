import { User } from '../../model/user';
export const user_services = {
    async findAllUsers() {
        return User.find().sort({ createdAt: -1 });
    },
    async findUserbyId(id) {
        return User.findById(id);
    },
    async findUserByEmail(email) {
        return User.findOne({ email });
    },
    async findUserByEmailWithPassword(email) {
        return User.findOne({ email }).select("+password");
    },
    async updateUser(id, updates) {
        return User.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true });
    },
    async createUser(data) {
        const user_data = new User(data);
        return user_data.save();
    }, async deleteUser(id) {
        return User.findByIdAndDelete(id);
    }
}
