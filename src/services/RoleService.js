const RoleRepository = require('../repositories/RoleRepository');

class RoleService {
   
    async all() {
        return await RoleRepository.all();
    }

    async find(id) {
        const role = await RoleRepository.findById(id);

        if (! role) {
            throw new Error('Role not found');
        }

        return role;
    }

    async create(attributes) {
        attributes['active'] = 1;

        const role =  await RoleRepository.create(attributes);

        if (! role) {
            throw new Error('Error, can not create this role');
        }

        return role;
    }

    async update(id, attributes) {
        await RoleRepository.update(id, attributes);
        
        return await this.find(id);
    }

    async delete(id) {
        await this.find(id);

        return await RoleRepository.delete(id);
    }

}

module.exports = new RoleService();