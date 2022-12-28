
const db = require("../database/connectDB");

module.exports = {
    importGoods: async (req, res) => {
        let stt = req.body.stt;
        let fa_id = req.body.fa_id;
        let products = req.body.products;
        
        try {
            if (
                !fa_id || 
                !products
            ) {
                res.status(400).send({
                    status: false,
                    message: ''
                });
            }
            else {
                products.forEach(async item => {
                    // let msg = '';
                    let old_product = await db.product_factories.findOne({
                        where: {
                            fa_id: fa_id,
                            product_id: item.product_id,
                        }
                    });

                    if (old_product) {
                        old_product.set({
                            amount: parseInt(old_product.amount) + parseInt(item.amount)
                        });

                        old_product.save();
                        // msg += `Successfully changed the amount of product has ID = ${item.product_id}\n`;
                    }
                    else {
                        db.product_factories.create({
                            stt: stt,
                            fa_id: fa_id,
                            product_id: item.product_id,
                            amount: item.amount
                        })
                        // .then(data => msg += `Successfully added new goods with ID = ${item.product_id}\n`)
                        .catch(error => {
                            res.status(400).send(error);
                        });
                    }
                });
                
                return res.status(200).send(`Successfully imported into factory's warehouse`);
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },

    exportGoods: async (req, res) => {
        let fa_id = req.body.fa_id;
        let da_id = req.body.da_id;
        let products = req.body.products;

        try {
            if (
                !fa_id ||
                !da_id ||
                !products
            ) {
                res.status(400).send({
                    status: false,
                    message: ''
                });
            }
            else {
                products.forEach(async product => {
                    let product_in_factory = await db.product_factories.findOne({
                        where: {
                            fa_id: fa_id,
                            product_id: product.product_id,
                        }
                    });
                    
                    let product_in_distriagent = await db.product_distriagents.findOne({
                        where: {
                            da_id: da_id,
                            product_id: product.product_id,
                        }
                    });
                    
                    product_in_factory.set({
                        amount: parseInt(product_in_factory.amount) - parseInt(product.amount)
                    });
                    product_in_factory.save();

                    product_in_distriagent.set({
                        amount: parseInt(product_in_distriagent.amount) + parseInt(product.amount)
                    });
                    product_in_distriagent.save();
                });

                return res.status(200).json("successfully exported goods")
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
}