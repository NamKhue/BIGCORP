
const db = require("../database/connectDB");

module.exports = {
    getAllProductsAccordingToCategory: async (req, res) => {
        try {
            const id = req.params.id;
            let products = await db.info_products.findAll({
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

    getAllLocations: async (req, res) => {
        try {
            const id = req.params.id; 
            let data;
            
            if (id == "1") {
                data = await db.factories.findAll({
                    raw: true,
                })
            }
            else if (id == "2") {
                data = await db.distribution_agents.findAll({
                    raw: true,
                });
            }
            else {
                data = await db.warranty_centers.findAll({
                    raw: true,
                });
            }
            
            return res.status(200).json({
                msg: 'successfully get all locations',
                data
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

    getProductsByCustomer: async (req, res) => {
        try {
            const customer_id = req.params.id;

            let products = [];

            let transaction = await db.transactions.findAll({
                raw: true,
                where: {
                    customer_id: customer_id
                },
            });

            transaction.forEach(async item => {
                
                let transaction_detail = await db.transaction_details.findAll({
                    raw: true,
                    where: {
                        transaction_id: item.transaction_id
                    },
                });

                transaction_detail.forEach(async item_detail => {
                    if (!products.includes(item_detail.product_id)) {
                        products.push(item_detail.product_id);
                    }
                });
                
                console.log(products);

            });

            // console.log(products);
            
            return res.status(200).json(`successfully get products of customer have ID = ${customer_id}`);
            
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

    getAllCustomers: async (req, res) => {
        try {
            let customers = await db.customers.findAll({
                raw: true,
            })
            
            return res.status(200).json({
                msg: 'successfully get all customers',
                customers
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

    getAllSoldProducts: async (req, res) => {
        try {
            let customers = await db.customers.findAll({
                raw: true,
            })
            
            return res.status(200).json({
                msg: 'successfully get all customers',
                customers
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

    provideAccount: async (req, res) => {
        try {
            let id = req.body.id;
            let role_id = req.body.role_id;
            let username = req.body.username;
            let password = req.body.password;
            let status = req.body.status;

            // check username and password


            // insert data to table
            db.accounts.create({
                id: id,
                role_id: role_id,
                username: username,
                password: password,
                status: status
            })
            .catch(error => {
                res.status(400).send(error);
            });
            
            return res.status(200).json('successfully created account');
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    }
}   