const RegistrationService = require('../services/RegistrationService');

class RegistrationController {
    async index(req, res) {
        try {
            const registration = await RegistrationService.all();
            return res.status(200).json(registration);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async show(req, res) {
        try {
            const registration = await RegistrationService.find(req.params.id);
            return res.status(200).json(registration);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async store(req, res) {
        try {
            const registration = await RegistrationService.create(req.body);
            return res.status(200).json(registration);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const registration = await RegistrationService.update(id, req.body);

            return res.status(200).json(registration);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await RegistrationService.remove(id);

            return res.status(200).json({message: `Registration ${id} was successfully removed`});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}

module.exports = new RegistrationController();