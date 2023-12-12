const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the contract without providing any constructor arguments
  const SantasMessage = await hre.ethers.deployContract("SantasMessage");

  // Wait for the contract to deploy
  await SantasMessage.waitForDeployment();

  // Print the address of the deployed contract
  console.log("SantasMessage Contract Address:", SantasMessage.target);

  // Sleep for 30 seconds while Etherscan indexes the new contract deployment
  await sleep(30 * 1000); // 30s = 30 * 1000 milliseconds

  // Verify the contract on etherscan
  await hre.run("verify:verify", {
    address: SantasMessage.target,
  });
}

// Call the main function and catch any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
