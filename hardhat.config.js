require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Загружаем .env файл

module.exports = {
  solidity: "0.8.20",  // Версия Solidity
  networks: {
    holesky: {
      url: "",  // RPC URL для Holesky
      accounts: [''],      // Приватный ключ для деплоя
    },
  },
};
