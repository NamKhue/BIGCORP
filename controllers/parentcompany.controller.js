const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const db = require("../database/connectDB");
let authUtils = require("../utils/auth.utils");

const { body, validationResult } = require('express-validator/check');

module.exports = {
    validate: (method) => {
        switch (method) {
            case 'register': {
                return [ 
                    body('username').custom(value => {
                        if (value == '') {
                            return Promise.reject('Username is empty');
                        }
                        return db.accounts.findAll({
                            username: value
                        })
                        .then(user => {
                            if (user.length > 0) {
                                // Custom error message and reject
                                // the promise
                                return Promise.reject('Username already in use');
                            }
                        });
                    }),
                    body('password').isStrongPassword({
                        minLength: 8,
                        minLowercase: 1,
                        minUppercase: 1,
                        minNumbers: 1
                    })
                    .withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"),
                ]   
            }
        }
    },
    
    home: async (req, res) => {
        try {
            res.render("parentcompany", {});
        }
        catch(err) {
            console.log(err);
            return res.status(500).json("lỗi server");
        }
    },

    uiRegister: async (req, res) => {
        try {
            res.render("parentcompany/register", {});
        }
        catch(err) {
            console.log(err);
            return res.status(500).json("lỗi server");
        }
    },

    register: async (req, res) => {
        try {
            // Validate incoming input
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array()
                });
            }

            let id = req.body.id;
            let role_id = req.body.role_id;
            let username = req.body.username;
            let password = req.body.password;
            let status = req.body.status;
            
            if (!username) {
                return res.json('tài khoản đang trống');
            }
            if (!password) {
                return res.json('mật khẩu đang trống');
            }

            username = String(username).toLowerCase();

            let hasUsernameBefore = await db.accounts.findOne({
                where: {
                    username: username,
                },
            });

            if (hasUsernameBefore) {
                // res.render('parentcompany/register', {
                //     errors: [
                //         'Tên tài khoản đã tồn tại'
                //     ]
                // });
                
                res.json('Tên tài khoản đã tồn tại');
            }
	        else {
                const hashPassword = bcrypt.hashSync(password, SALT_ROUNDS);
                const token = authUtils.generateAccessToken({ username: username });

                // insert data to table
                db.accounts.create({
                    id: id,
                    role_id: role_id,
                    username: username,
                    password: hashPassword,
                    status: status,
                    TOKEN_KEY: token,
                    refreshToken: '',
                })
                .catch(error => {
                    return res.status(400).send(error);
                    // 
                });
                
                return res.status(200).json('successfully created account');
                // res.render('');
            }
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

    uiManageCategoryProduct: async (req, res) => {
        try {
            res.render("parentcompany/manage_category_product", {});
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

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
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

    uiManageFacility: async (req, res) => {
        try {
            // let data = await db.factories.findAll();

            let strings = [
                '1 - cơ sở sản xuất',
                '2 - đại lý phân phối',
                '3 - trung tâm bảo hành'
            ];
            
            // function removeAccents(str) {
            //     return str.normalize('NFD')
            //               .replace(/[\u0300-\u036f]/g, '')
            //               .replace(/đ/g, 'd').replace(/Đ/g, 'D');
            // }

            // let inputStr = req.query.choose_facility || null;
            // inputStr = removeAccents(inputStr);
            
            // console.log(inputStr);
            // // if (inputStr !== undefined) {
            // //     let role_id;
                
            // //     strings.map(item => {
            // //         if (removeAccents(item).includes(inputStr)) {
            // //             role_id = item;
            // //         }
            // //     });
                
            // //     console.log(role_id);
            // //     role_id = role_id.slice(0, 1);
            // //     console.log(role_id);

            // //     let dataResult;
            // //     if (role_id == "1") {
            // //         dataResult = await db.factories.findAll();
            // //     }
            // //     else if (role_id == "2") {
            // //         dataResult = await db.distribution_agents.findAll();
            // //     }
            // //     else if (role_id == "3") {
            // //         dataResult = await db.warranty_centers.findAll();
            // //     }
            // // }

            // let dataResult = temp_data.findAll({
            //     where: {
            //         role_id: role_id,
            //     },
            // });

            // dataResult.map(item => {console.log(item)})
            

            res.render("parentcompany/manage_facility", {
                msg: 'success',
                // dataResult,
            });
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

    getAllLocations: async (req, res) => {
        try {
            // console.log(req.body.choose_facility);

            const role_id = req.params.id;
            let data;
            
            if (role_id == "1") {
                data = await db.factories.findAll({
                    raw: true,
                })
            }
            else if (role_id == "2") {
                data = await db.distribution_agents.findAll({
                    raw: true,
                });
            }
            else if (role_id == "3") {
                data = await db.warranty_centers.findAll({
                    raw: true,
                });
            }

            // res.render('parentcompany/manage_facility/', {
            //     msg: 'success',
            //     data
            // });
            
            return res.status(200).json({
                msg: 'successfully get all locations',
                data
            })
        }
        catch(err) {
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
}   