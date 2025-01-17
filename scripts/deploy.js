const { Web3 } = require("web3");
const fs = require("fs");

// RPC URL тестовой сети Holesky
const RPC_URL = "https://ethereum-holesky-rpc.publicnode.com/";
const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));

// Приватный ключ и адрес кошелька
const privateKey = "0x353a1bc00315b4b6b7191514644d9de4256eaed462602767c87543f19c1cf3f8";
const walletAddress = "0x9CeD9F76b87f28383DdD5aF2142d27E75c234Df3";

// ABI и bytecode контракта
const contractPath = "./artifacts/contracts/AituSE-2320.sol/UniversityToken.json";
const contractData = JSON.parse(fs.readFileSync(contractPath).toString());
const abi = contractData.abi;
const bytecode = contractData.bytecode;

async function main() {
  try {
    // Пример получения информации о блоке
    const block = await web3.eth.getBlock(0);
    console.log("Genesis Block:", block);

    // Развертывание контракта
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    const contract = new web3.eth.Contract(abi);

    const deployment = contract.deploy({
      data: bytecode,
    });

    const gas = await deployment.estimateGas({ from: walletAddress });
    console.log(`Estimated Gas: ${gas}`);

    const receipt = await deployment.send({
      from: walletAddress,
      gas,
    });

    console.log("Contract deployed at address:", receipt.options.address);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

main();
