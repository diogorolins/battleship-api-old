const app = require("./config/custom-express");
if (process.env.NODE_ENV !== "production") {
  require("dotenv/config");
}

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
