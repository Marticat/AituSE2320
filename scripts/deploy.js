const {Web3} = require("web3");
const fs = require("fs");


// RPC URL тестовой сети (например, Holesky)
const RPC_URL = "https://ethereum-holesky-rpc.publicnode.com";
const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
const account = web3.eth.accounts.privateKeyToAccount('0x353a1bc00315b4b6b7191514644d9de4256eaed462602767c87543f19c1cf3f8');

async function main() {
  // Пример использования web3 для взаимодействия с блокчейном
  const block = await web3.eth.getBlock(0);
  console.log(block);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// ABI и bytecode контракта
const abi = JSON.parse(
    fs.readFileSync("./artifacts/contracts/AituSE-2320.sol/UniversityToken.json").toString()
  ).abi;
  const bytecode = JSON.parse(
    fs.readFileSync("./artifacts/contracts/AituSE-2320.sol/UniversityToken.json").toString()
  ).bytecode;
  

// Адрес кошелька и приватный ключ
const walletAddress = "0x9CeD9F76b87f28383DdD5aF2142d27E75c234Df3"; // Замените на ваш адрес MetaMask
const privateKey = "0x353a1bc00315b4b6b7191514644d9de4256eaed462602767c87543f19c1cf3f8"; // Замените на ваш приватный ключ

async function deploy() {
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);

  const contract = new web3.eth.Contract(abi);
  const deployment = contract.deploy({
    data: bytecode,
  });

  const gas = await deployment.estimateGas();
  const options = {
    data: deployment.encodeABI(),
    gas,
  };

  const receipt = await web3.eth.sendTransaction({
    from: walletAddress,
    ...options,
  });

  console.log("Contract deployed at:", receipt.contractAddress);
}

deploy().catch((error) => console.error("Deployment failed:", error));
