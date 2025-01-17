require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Загружаем .env файл

module.exports = {
  solidity: "0.8.20",  // Версия Solidity
  networks: {
    holesky: {
      url: "https://ethereum-holesky-rpc.publicnode.com",  // RPC URL для Holesky
      accounts: ['0x353a1bc00315b4b6b7191514644d9de4256eaed462602767c87543f19c1cf3f8'],      // Приватный ключ для деплоя
    },
  },
};
