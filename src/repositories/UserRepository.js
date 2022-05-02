const DB = require('../models');

class UserRepository {
    constructor () {
        this.model = DB.Users;
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
}

module.exports = new UserRepository();