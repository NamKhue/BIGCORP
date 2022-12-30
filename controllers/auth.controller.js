const randtoken = require('rand-token');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const db = require("../database/connectDB");
const authMiddleware = require('../middlewares/auth.middleware');
let {generateAccessToken} = require("../utils/auth.utils");

module.exports = {
    uiLogin: async (req, res) => {
        try {
            res.render('auth/login');
        }
        catch(err) {
            console.log(err);
            return res.status(500).json("lỗi server");
        }
    },

    login: async (req, res) => {
        try {
            let username = req.body.username.toLowerCase() || 'parentcompany1';
            let password = req.body.password || 'parentcompany1';
            
            // const token = await generateAccessToken({ username: username });

            // console.log(token + '\n');
            
            let user = await db.accounts.findOne({
                where: {
                    username: username
                }
            });
            
            if (!user) {
                res.render('auth/login', {
                    errors: [
                        'This user doesnt exist'
                    ],
                    values: req.body
                });
                return;
            }

            // const isPasswordValid = bcrypt.compareSync(password, user.password);
            let hashPassword = bcrypt.hashSync(password, SALT_ROUNDS);
            const isPasswordValid = password == user.password;
            if (!isPasswordValid) {
                // console.log(hashPassword + '\n' + user.password);
                res.render('auth/login', {
                    errors: [
                        'Wrong password!'
                    ],
                    values: req.body
                });
                return;
            }

            // const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
            // const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

            // const dataForAccessToken = {
            //     username: user.username.toLowerCase(),
            // };
            // const accessToken = await authMiddleware.generateToken(
            //     dataForAccessToken,
            //     accessTokenSecret,
            //     accessTokenLife,
            // );

            // if (!accessToken) {
            //     res.render('auth/login', {
            //         errors: [
            //             'Fail to login. Please try again!'
            //         ],
            //         values: req.body
            //     });
            //     return;
            // }

            // let refreshToken = randtoken.generate(400); // tạo 1 refresh token ngẫu nhiên

            // if (!user.refreshToken) {
            //     // Nếu user này chưa có refresh token thì lưu refresh token đó vào database
            //     // await userModel.updateRefreshToken(user.username, refreshToken);
            //     let user = await db.accounts.findOne({
            //         where: {
            //             username: username,
            //         }
            //     });

            //     user.set({
            //         TOKEN_KEY: await generateAccessToken({ username: username }),
            //         refreshToken: refreshToken,
            //     })
            //     user.save();
            // } else {
            //     // Nếu user này đã có refresh token thì lấy refresh token đó từ database
            //     // refreshToken = user.refreshToken;
            // }
            
            // console.log('\n');
            // console.log(token + '\n' + user.TOKEN_KEY);
            // console.log('\n');

            res.cookie('token', user.id, {
                signed: true
            });

            // res.render('parentcompany/register', {
            //     msg: 'Đăng nhập thành công.',
            //     // accessToken,
            //     // refreshToken,
            //     user,
            // });

            res.redirect('/parentcompany/register');
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

}