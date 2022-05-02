const ClassRepository = require('../repositories/ClassRepository');

class ClassService {
    async all() {
        return await ClassRepository.all();
    }

    async find(id) {
        const classes = await ClassRepository.findById(id);

        if (! classes) {
            throw new Error('Class not found');
        }

        return classes;
    }

    async create(attributes) {

        attributes['active'] = 1;

        const classes = ClassRepository.create(attributes);

        if (! classes) {
            throw new Error('Error, can not create this classes');
        }

        return classes;
    }

    async update(id, attributes) {
        await ClassRepository.update(id, attributes);

        return await this.find(id);
    }

    async remove(id) {
        await this.find(id);

        return await ClassRepository.remove(id);
    }
}

module.exports = new ClassService();