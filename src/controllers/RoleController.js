const RoleService = require('../services/RoleService');

class RoleController {
    
    async index(req, res) {
        try {
            const roles = await RoleService.all();
            return res.status(200).json(roles);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async show(req, res) {
        try {
            const role = await RoleService.find(req.params.id);
            return res.status(200).json(role);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async store(req, res) {
        try {
            const role = await RoleService.create(req.body);
            return res.status(200).json(role);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const role = await RoleService.update(id, req.body);

            return res.status(200).json(role);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    async remove(req, res) {
        try {
            const id = req.params.id;
            await RoleService.delete(id);

            return res.status(200).json({message: `Role ${id} was successfully removed`});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

}

module.exports = new RoleController();