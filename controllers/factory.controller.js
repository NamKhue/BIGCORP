
const db = require("../database/connectDB");

module.exports = {
    importGoods: (req, res) => {
        let fa_id = req.body.fa_id;
        let product_id = req.body.product_id;
        let amount = req.body.amount;
        try {
            if (
                !fa_id || 
                !product_id || 
                !amount
            ) {
                res.status(400).send({
                    status: false,
                    message: ''
                });
            }
            else {
                db.factories.create({
                    fa_id: req.body.fa_id,
                    product_id: req.body.product_id,
                    amount: req.body.amount
                })
                .then(data => res.status(200).send(`Successfully added new goods`))
                .catch(error => {
                    res.status(400).send(error);
                });
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
}