const LevelRepository = require('../repositories/LevelRepository');

class LevelService {
    async all() {
        return await LevelRepository.all();
    }

    async find(id) {
        const level = await LevelRepository.findById(id);

        if (! level) {
            throw new Error('Level not found');
        }

        return level;
    }

    async create(attributes) {

        attributes['active'] = 1;

        const level = LevelRepository.create(attributes);

        if (! level) {
            throw new Error('Error, can not create this level');
        }

        return level;
    }

    async update(id, attributes) {
        await LevelRepository.update(id, attributes);

        return await this.find(id);
    }

    async remove(id) {
        await this.find(id);

        return await LevelRepository.remove(id);
    }
}

module.exports = new LevelService();