
const db = require("../database/connectDB");

module.exports = {
    getAllProductsAccordingToCategory: (req, res) => {
        try {
            const id = req.params.id;
            let products = db.info_products.findAll({
                raw: true,
                where: {
                    category_id: id
                }
            })
            
            return res.status(200).json({
                msg: 'get all factories successfully',
                products
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },


    getAllLocations: (req, res) => {
        try {
            const id = req.params.id; 
            let data;
            
            if (id == "1") {
                data = db.factories.findAll({
                    raw: true,
                })
            }
            else if (id == "2") {
                data = db.distribution_agents.findAll({
                    raw: true,
                });
            }
            else {
                data = db.warranty_centers.findAll({
                    raw: true,
                });
            }
            
            return res.status(200).json({
                msg: 'get all factories successfully',
                data
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

}