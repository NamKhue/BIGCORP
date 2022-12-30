const randtoken = require('rand-token');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const db = require("../database/connectDB");
let authUtils = require("../utils/auth.utils");

module.exports = {
    // validate: (method) => {
    //     switch (method) {
    //         case 'login': {
    //             return [ 
    //                 body('username').custom(value => {
    //                     if (value == '') {
    //                         return Promise.reject('Username is empty');
    //                     }
    //                 }),
    //                 body('password').isStrongPassword({
    //                     minLength: 8,
    //                     minLowercase: 1,
    //                     minUppercase: 1,
    //                     minNumbers: 1
    //                 })
    //                 .withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"),
    //             ]   
    //         }
    //     }
    // },
    
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
            let username = req.body.username.toLowerCase();
            let password = req.body.password;
            
            // const token = await authUtils.generateAccessToken({ username: username });

            // console.log(token + '\n');




            if (!username) {
                // res.render('auth/login', {
                //     errors: [
                //         'username is empty',
                //     ]
                // });
                // return;
             
                return res.status(404).json('tài khoản đang trống');
            }
            if (!password) {
                // res.render('auth/login', {
                //     errors: [
                //         'password is empty',
                //     ]
                // });
                // return;
             
                return res.status(404).json('mật khẩu đang trống');
            }
            
            let user = await db.accounts.findOne({
                where: {
                    username: username
                }
            });
            
            if (!user) {
                // res.render('auth/login', {
                //     errors: [
                //         'This user doesnt exist'
                //     ],
                //     values: req.body
                // });
                // return;

                return res.status(404).json('không tồn tại');
            }
            
            const isPasswordValid = bcrypt.compareSync(password, user.password);
            if (!isPasswordValid) {
                // res.render('auth/login', {
                //     errors: [
                //         'Wrong password!'
                //     ],
                //     values: req.body
                // });
                // return;
                
                return res.status(404).json('sai mật khẩu');
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
            

            // return res.status(200).json("dang nhap thanh cong")
        }
        catch(err) {
            console.log(err)
            return res.status(500).json("lỗi server")
        }
    },

}