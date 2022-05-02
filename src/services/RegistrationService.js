const RegistrationRepository = require('../repositories/RegistrationRepository');
const UserService = require('./UserService');

class RegistrationService {
    async all() {
        return await RegistrationRepository.all();
    }

    async find(id) {
        const classes = await RegistrationRepository.findById(id);

        if (! classes) {
            throw new Error('Class not found');
        }

        return classes;
    }

    async create(attributes) {

        attributes['active'] = 1;

        const classes = RegistrationRepository.create(attributes);

        if (! classes) {
            throw new Error('Error, can not create this classes');
        }

        return classes;
    }

    async update(id, attributes) {
        await RegistrationRepository.update(id, attributes);

        return await this.find(id);
    }

    async remove(id) {
        await this.find(id);

        return await RegistrationRepository.remove(id);
    }

    async findByUserId(userId) {
        await UserService.find(userId);

        return await RegistrationRepository.findByUserId(userId);
    }
}

module.exports = new RegistrationService();