const jwt = require("jsonwebtoken");
require("dotenv/config");

class TokenService {
  static generateToken(id) {
    console.log(id);
    return jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 86400000000,
    });
  }
}

module.exports = TokenService;
