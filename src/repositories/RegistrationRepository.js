const DB = require('../models');

class RegistrationRepository {
    constructor () {
        this.model = DB.Registrations;
    }

    async all() {
        return await this.model.findAll();
    }

    async findById(id) {
        return await this.model.findOne({where: {id: id}});
    }

    async create(userData) {
        return await this.model.create(userData);
    }

    async update(id, userData) {
        return await this.model.update(userData, {where: {id, id}})
    }

    async remove(id) {
        return this.model.destroy({where: {id: id}})
    }

    async findByUserId(userId) {
        return await this.model.findAll({
            where: {
                student_id: userId
            },
        });
    }
}

module.exports = new RegistrationRepository();