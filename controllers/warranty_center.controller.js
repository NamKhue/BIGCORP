const db = require("../database/connectDB");

module.exports = {
    moveGoodsToFactory: async (req, res) => {
        try {
            let unique_product_id = req.body.unique_product_id;
            let warranty_summon_card_id = req.body.warranty_summon_card_id;

            // warranty_summon_distriagents_warehouses
            db.fix_factory_warehouses.create({
                unique_product_id: unique_product_id,
                warranty_summon_card_id: warranty_summon_card_id,
            })
            .catch(error => {
                res.status(400).send(error);
            });

            return res.status(200).json('successfully moved error goods to factory');
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    
}