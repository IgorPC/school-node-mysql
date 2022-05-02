const UserRepository = require('../repositories/UserRepository');

class UserService {
    async all() {
        return await UserRepository.all();
    }

    async find(id) {
        const user = await UserRepository.findById(id);

        if (! user) {
            throw new Error('User not found');
        }

        return user;
    }

    async create(attributes) {

        attributes['active'] = 1;

        const user = UserRepository.create(attributes);

        if (! user) {
            throw new Error('Error, can not create this user');
        }

        return user;
    }

    async update(id, attributes) {
        await UserRepository.update(id, attributes);

        return await this.find(id);
    }

    async remove(id) {
        await this.find(id);

        return await UserRepository.remove(id);
    }
}

module.exports = new UserService();