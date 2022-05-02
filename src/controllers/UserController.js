const UserService = require('../services/UserService');
const RegistrationService = require('../services/RegistrationService');

class UserController {

    async index(req, res) {
        try {
            const users = await UserService.all();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async show(req, res) {
        try {
            const user = await UserService.find(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async store(req, res) {
        try {
            const user = await UserService.create(req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const user = await UserService.update(id, req.body);

            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await UserService.remove(id);

            return res.status(200).json({message: `User ${id} was successfully removed`});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async getUserRegistrations(req, res) 
    {
        try {
            const userId = req.params.id;
            const registration = await RegistrationService.findByUserId(userId);

            return res.status(200).json(registration);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

}

module.exports = new UserController();