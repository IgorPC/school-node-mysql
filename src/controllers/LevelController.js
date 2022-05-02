const LevelService = require('../services/LevelService');

class LevelController {
    async index(req, res) {
        try {
            const level = await LevelService.all();
            return res.status(200).json(level);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async show(req, res) {
        try {
            const Level = await LevelService.find(req.params.id);
            return res.status(200).json(Level);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async store(req, res) {
        try {
            const Level = await LevelService.create(req.body);
            return res.status(200).json(Level);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const Level = await LevelService.update(id, req.body);

            return res.status(200).json(Level);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await LevelService.remove(id);

            return res.status(200).json({message: `Level ${id} was successfully removed`});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}

module.exports = new LevelController();