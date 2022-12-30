const db = require("../database/connectDB");

module.exports = {
    home: async (req, res) => {
        try {
            res.render("distribution_agent", {});
        }
        catch(err) {
            res.render('distribution_agent', {
                errors: [
                    "system error"
                ],
            })
        }
    },
    
    uiSellProduct: async (req, res) => {
        try {
            res.render("distribution_agent/sell_product", {});
        }
        catch(err) {
            res.render('distribution_agent', {
                errors: [
                    "system error"
                ],
            })
        }
    },

    sellProduct: async (req, res) => {
        let transaction_id = req.body.transaction_id;
        let da_id = req.body.da_id;
        let customer = req.body.customer;
        let products = req.body.products;

        try {
            if (
                !transaction_id || 
                !da_id || 
                !customer || 
                !products
            ) {
                res.status(400).send({
                    status: false,
                    message: ''
                });
            }
            else {
                // new transaction
                db.transactions.create({
                    transaction_id: transaction_id,
                    customer_id: customer.customer_id,
                    da_id: da_id,
                })
                .catch(error => {
                    res.status(400).send(error);
                });

                // new customer
                let customer_id = customer.customer_id;
                let name = customer.name;
                let address = customer.address;
                let phone = customer.phone;

                let temp_customer = await db.customers.findOne({
                    where: {
                        customer_id: customer_id,
                    }
                });

                if (!temp_customer) {
                    db.customers.create({
                        customer_id: customer_id,
                        name: name,
                        address: address,
                        phone: phone
                    })
                    .catch(error => {
                        res.status(400).send(error);
                    });
                }

                // minus amount of products in distribution agents' warehouse
                products.forEach(async product => {
                    let product_id = product.product_id;
                    let quantity_ordered = product.quantity_ordered;
    
                    let temp_product = await db.product_distriagents.findOne({
                        where: {
                            da_id: da_id,
                            product_id: product_id,
                        }
                    });

                    // check if that product exists in distribution agents' warehouse
                    // if true, subtraction (minus)
                    if (temp_product) {
                        temp_product.set({
                            amount: temp_product.amount - quantity_ordered
                        });
                        temp_product.save();

                        // new transaction_details
                        db.transaction_details.create({
                            stt: req.body.stt,
                            transaction_id: transaction_id,
                            product_id: product_id,
                            quantity_ordered: quantity_ordered,
                        })
                        .catch(error => {
                            res.status(400).send(error);
                        });

                        // after buying products, immediately added them to product_customer
                        // search the original date for warranty stuffs
                        let dateForReferring = await db.info_products.findOne({
                                raw: true,
                                where: {
                                product_id: temp_product.product_id
                            },
                        });

                        let warranty_period = dateForReferring.warranty_period;
                        let unique_product_id = product.unique_product_id;

                        // add products to product_customers table
                        db.product_customers.create({
                            unique_product_id: unique_product_id,
                            customer_id: customer_id,
                            product_id: product_id,
                            warranty_period: warranty_period,
                            fix_status: 0,
                            still_in_warranty_period: 1,
                            times_of_warranty: 0
                        })
                        .catch(error => {
                            res.status(400).send(error);
                        });

                        // add products' warranty_period to check_warranties table
                        db.check_warranties.create({
                            unique_product_id: unique_product_id,
                            customer_id: customer_id,
                            warranty_period: warranty_period
                        })
                        .catch(error => {
                            res.status(400).send(error);
                        });
                    }
                    else {
                        // res.status(404).send('Not found this product');
                    }
                });

                return res.status(200).send(`Successfully sold`);
            }
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

    moveWarrantyGoods: async (req, res) => {
        try {
            let stt = req.body.stt;
            let warranty_summon_card_id = req.body.warranty_summon_card_id;
            let da_id = req.body.da_id;
            let wc_id = req.body.wc_id;
            let customer_id = req.body.customer_id;
            let products = req.body.products;
            
            // loop through products
            products.forEach(async product => {
                let unique_product_id = product.unique_product_id;
                let status = product.status;
                let type = product.type;
                
                // check if still in warranty period
                let item_warranty_customer = await db.product_customers.findOne({
                    where: {
                        unique_product_id: unique_product_id,
                    }
                });
                let warranty_customer = item_warranty_customer.warranty_period;

                let item_warranty_distriagent = await db.check_warranties.findOne({
                    where: {
                        unique_product_id: unique_product_id,
                    }
                });
                let warranty_distriagent = item_warranty_distriagent.warranty_period;

                // check warranty in another way
                // let item_original_warranty_date = await db.info_products.findOne({
                //     where: {
                //         product_id: product_id,
                //     }
                // });
                // let original_warranty_date = item_original_warranty_date.warranty_period;

                // if true, it's free/ low fee to repair the product
                if (warranty_customer == warranty_distriagent && warranty_customer > 0) {
                    // insert data to the warranty_warehouses table
                    db.warranty_warehouses.create({
                        stt: stt,
                        warranty_summon_card_id: warranty_summon_card_id,
                        da_id: da_id,
                        customer_id: customer_id,
                        unique_product_id: unique_product_id,
                        wc_id: wc_id,
                        status: status
                    })
                    .catch(error => {
                        res.status(400).send(error);
                    });

                    // update some values of product_customers
                    if (type == 'warranty') {
                        item_warranty_customer.set({
                            fix_status: type,
                            times_of_warranty: parseInt(item_warranty_customer.times_of_warranty) + 1
                        });
                        item_warranty_customer.save();
                    }
                    else if (type == 'summon') {
                        item_warranty_customer.set({
                            fix_status: type,
                            times_of_summon: parseInt(item_warranty_customer.times_of_summon) + 1
                        });
                        item_warranty_customer.save();
                    }
                }
                else {
                    // if not, take the fee of taking care of the product needs repairing
                }
            });
            
            return res.status(200).json('successfully created warranty/ summon card');
            
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },
}