const jwt = require("jsonwebtoken");

module.exports = {
    generateAccessToken: async (username) => {
        return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    }
}