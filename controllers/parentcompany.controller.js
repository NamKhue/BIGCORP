
const db = require("../database/connectDB");

module.exports = {
    getAllProductsAccordingToCategory: (req, res) => {
        try {
            const id = req.params.id;
            let products = db.info_products.findAll({
                raw: true,
                where: {
                    id
                },
                // include: [
                //     {
                //         model: db.product_factory,
                //         attributes: ['name'],
                //     }
                // ]
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












    getAllFactories: (req, res) => {
        try {
            let data = db.factories.findAll({
                raw: true,
                include: [
                    {
                        model: db.factories,
                        attributes: ['name'],
                    }
                ]
            })
            return res.status(200).json({
                msg: 'get all factories successfully',
                data
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },
    getFactoryById: (req, res) => {
        try {
            const id = req.params.id;
            let data = db.factories.findOne({
                raw: true,
                where: {
                    id
                },
                include: [
                    {
                        model: db.classes,
                        attributes: ['name'],
                    }
                ]
            })
            if (data) {
                return res.status(200).json({
                    msg: 'get info student successfully',
                    data
                })
            } else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
            
        } catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    createFactory: (req, res) => {
        let id = req.body.id;
        let name = req.body.name;
        let birth = req.body.birth;
        let gender = req.body.gender;
        let id_class = req.body.id_class;
        try {
            if (
                !id || 
                !name || 
                !birth || 
                !gender || 
                !id_class
            ) {
                res.status(400).send({
                    status: false,
                    message: ''
                });
            }
            else {
                let check = db.factories.findOne({
                    where: {
                        id
                    }
                })
                if (check) {
                    return res.status(409).json("Đã có sinh viên có id này!!")
                }
                db.factories.create({
                    id: req.body.id,
                    name: req.body.name,
                    birth: req.body.birth,
                    gender: req.body.gender,
                    id_class: req.body.id_class

                })
                .then(data => res.status(200).send(`Successfully added new factory`))
                .catch(error => {
                    res.status(400).send(error);
                });
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    deleteFactory: (req, res) => {
        try {
            const id = req.params.id;
            
            let factory = db.factories.findOne({
                where: {
                    id
                }
            })

            if (factory) {
                factory.destroy();
                return res.status(200).send(`Successfully deleted factory with ID: ${id}`);
            }
            else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    updateFactory: (req, res) => {
        try {
            const id = req.params.id;
            
            let factory = db.factories.findOne({
                where: {
                    id
                }
            })
            
            const new_name = req.body.name || factory.name;
            const new_birth = req.body.birth || factory.birth;
            const new_gender = req.body.gender || factory.gender;
            const new_id_class = req.body.id_class || factory.id_class;

            if (factory) {
                factory.set({
                    name: new_name,
                    birth: new_birth,
                    gender: new_gender,
                    id_class: new_id_class
                });
                factory.save();

                return res.status(200).send(`Successfully updated factory with ID: ${id}`);
            }
            else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },








    getAllDistribution_agents: (req, res) => {
        try {
            let data = db.distribution_agents.findAll({
                raw: true,
                include: [
                    {
                        model: db.distribution_agents,
                        attributes: ['name'],
                    }
                ]
            })
            return res.status(200).json({
                msg: 'get all distribution_agents successfully',
                data
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },
    getDistribution_agentById: (req, res) => {
        try {
            const id = req.params.id;
            let data = db.distribution_agents.findOne({
                raw: true,
                where: {
                    id
                },
                include: [
                    {
                        model: db.classes,
                        attributes: ['name'],
                    }
                ]
            })
            if (data) {
                return res.status(200).json({
                    msg: 'get info student successfully',
                    data
                })
            } else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
            
        } catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    createDistribution_agent: (req, res) => {
        let id = req.body.id;
        let name = req.body.name;
        let birth = req.body.birth;
        let gender = req.body.gender;
        let id_class = req.body.id_class;
        try {
            if (
                !id || 
                !name || 
                !birth || 
                !gender || 
                !id_class
            ) {
                res.status(400).send({
                    status: false,
                    message: ''
                });
            }
            else {
                let check = db.distribution_agents.findOne({
                    where: {
                        id
                    }
                })
                if (check) {
                    return res.status(409).json("Đã có sinh viên có id này!!")
                }
                db.distribution_agents.create({
                    id: req.body.id,
                    name: req.body.name,
                    birth: req.body.birth,
                    gender: req.body.gender,
                    id_class: req.body.id_class

                })
                .then(data => res.status(200).send(`Successfully added new factory`))
                .catch(error => {
                    res.status(400).send(error);
                });
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    deleteDistribution_agent: (req, res) => {
        try {
            const id = req.params.id;
            
            let distribution_agent = db.distribution_agents.findOne({
                where: {
                    id
                }
            })

            if (distribution_agent) {
                distribution_agent.destroy();
                return res.status(200).send(`Successfully deleted distribution_agent with ID: ${id}`);
            }
            else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    updateDistribution_agent: (req, res) => {
        try {
            const id = req.params.id;
            
            let distribution_agent = db.distribution_agents.findOne({
                where: {
                    id
                }
            })
            
            const new_name = req.body.name || distribution_agent.name;
            const new_birth = req.body.birth || distribution_agent.birth;
            const new_gender = req.body.gender || distribution_agent.gender;
            const new_id_class = req.body.id_class || distribution_agent.id_class;

            if (distribution_agent) {
                distribution_agent.set({
                    name: new_name,
                    birth: new_birth,
                    gender: new_gender,
                    id_class: new_id_class
                });
                distribution_agent.save();

                return res.status(200).send(`Successfully updated distribution_agent with ID: ${id}`);
            }
            else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },








    getAllWarranty_centers: (req, res) => {
        try {
            let data = db.warranty_centers.findAll({
                raw: true,
                include: [
                    {
                        model: db.warranty_centers,
                        attributes: ['name'],
                    }
                ]
            })
            return res.status(200).json({
                msg: 'get all warranty_centers successfully',
                data
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },
    getWarranty_centerById: (req, res) => {
        try {
            const id = req.params.id;
            let warranty_center = db.warranty_centers.findOne({
                raw: true,
                where: {
                    id
                },
                include: [
                    {
                        model: db.classes,
                        attributes: ['name'],
                    }
                ]
            })
            if (warranty_center) {
                return res.status(200).json({
                    msg: 'get info student successfully',
                    warranty_center
                })
            } else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
            
        } catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    createWarranty_center: (req, res) => {
        let id = req.body.id;
        let name = req.body.name;
        let birth = req.body.birth;
        let gender = req.body.gender;
        let id_class = req.body.id_class;
        try {
            if (
                !id || 
                !name || 
                !birth || 
                !gender || 
                !id_class
            ) {
                res.status(400).send({
                    status: false,
                    message: ''
                });
            }
            else {
                let check = db.warranty_centers.findOne({
                    where: {
                        id
                    }
                })
                if (check) {
                    return res.status(409).json("Đã có sinh viên có id này!!")
                }
                db.warranty_centers.create({
                    id: req.body.id,
                    name: req.body.name,
                    birth: req.body.birth,
                    gender: req.body.gender,
                    id_class: req.body.id_class

                })
                .then(data => res.status(200).send(`Successfully added new factory`))
                .catch(error => {
                    res.status(400).send(error);
                });
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    deleteWarranty_center: (req, res) => {
        try {
            const id = req.params.id;
            
            let warranty_center = db.warranty_centers.findOne({
                where: {
                    id
                }
            })

            if (warranty_center) {
                warranty_center.destroy();
                return res.status(200).send(`Successfully deleted warranty_center with ID: ${id}`);
            }
            else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    },
    updateWarranty_center: (req, res) => {
        try {
            const id = req.params.id;
            
            let warranty_center = db.warranty_centers.findOne({
                where: {
                    id
                }
            })
            
            const new_name = req.body.name || warranty_center.name;
            const new_birth = req.body.birth || warranty_center.birth;
            const new_gender = req.body.gender || warranty_center.gender;
            const new_id_class = req.body.id_class || warranty_center.id_class;

            if (warranty_center) {
                warranty_center.set({
                    name: new_name,
                    birth: new_birth,
                    gender: new_gender,
                    id_class: new_id_class
                });
                warranty_center.save();

                return res.status(200).send(`Successfully updated warranty_center with ID: ${id}`);
            }
            else {
                return res.status(404).json({
                    msg: 'Not found'
                })
            }
        }
        catch(err) {
            return res.status(500).json("lỗi server")
        }
    }
}
