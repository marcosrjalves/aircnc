const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { id } = req.id;

        const devocao = await Spot.find({ user:user_id });

        return res.json(devocao));
    }
}