const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

class TokenService {
  static generateToken(id) {
    console.log(id);
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: 86400000000,
    });
  }
}

module.exports = TokenService;
