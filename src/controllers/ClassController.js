const ClassService = require('../services/ClassService');

class ClassController {
    async index(req, res) {
        try {
            const classes = await ClassService.all();
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async show(req, res) {
        try {
            const classes = await ClassService.find(req.params.id);
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async store(req, res) {
        try {
            const classes = await ClassService.create(req.body);
            return res.status(200).json(classes);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const classes = await ClassService.update(id, req.body);

            return res.status(200).json(classes);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await ClassService.remove(id);

            return res.status(200).json({message: `Class ${id} was successfully removed`});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}

module.exports = new ClassController();