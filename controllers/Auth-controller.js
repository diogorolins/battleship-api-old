const bcrypt = require("bcryptjs");
const Player = require("../models/Player");
const TokenService = require("../config/tokenService");

class AuthController {
  static login() {
    return async (req, res) => {
      try {
        const { email, password } = req.body;

        const player = await Player.findOne({ where: { email } });
        if (!player)
          return res.status(400).json({ error: "Usuário não encontrado." });
        if (!(await bcrypt.compare(password, player.password)))
          return res.status(400).json({ error: "Senha inválida" });

        player.password = undefined;

        const token = TokenService.generateToken(player.id);
        res.status(200).json({ player, token });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro ao fazer login." });
      }
    };
  }
}

module.exports = AuthController;
