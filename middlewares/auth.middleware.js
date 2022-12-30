const db = require("../database/connectDB");

const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;

const sign = promisify(jwt.sign).bind(jwt);
const verify = promisify(jwt.verify).bind(jwt);

module.exports = {
    generateToken: async (payload, secretSignature, tokenLife) => {
        try {
            return await sign(
                {
                    payload,
                },
                secretSignature,
                {
                    algorithm: 'HS256',
                    expiresIn: tokenLife,
                },
            );
        } catch (error) {
            console.log(`Error in generate access token:  + ${error}`);
            return null;
        }
    },

    authenticateToken: async (req, res, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
    
        if (token == null) return res.sendStatus(401)
    
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            console.log(err)
        
            if (err) return res.sendStatus(403)
        
            req.user = user
        
            next()
        })
    },

    requiredAuth: async (req, res, next) => {
        if (!req.signedCookies.token) {
            res.redirect('/login');
            return;
        }
        
        var user = await db.accounts.findOne({
            where: {
                // TOKEN_KEY: req.signedCookies.token,
                id: req.signedCookies.token,
            }
        });
        
        if (!user) {
            res.redirect('/login');
            return;
        }

        res.locals.user = user;

        next();
    }
}