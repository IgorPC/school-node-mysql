const DB = require('../models');

class RoleRepository {
    constructor () {
        this.model = DB.Roles;
    }

    async all() {
        return await this.model.findAll();
    }

    async findById(id) {
        return await this.model.findOne({where: {id: id}});
    }

    async create(roleData) {
        return await this.model.create(roleData);
    }

    async update(id, attributes) {
        return await this.model.update(attributes, {where: {id: id}});
    }

    async delete(id) {
        return await this.model.destroy({where: {id: id}});
    }
}

module.exports = new RoleRepository();