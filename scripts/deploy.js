
const hre = require("hardhat");

async function main() {


  const Orange = await hre.ethers.getContractFactory("Orange");
  const orange = await Orange.deploy();

  await orange.deployed();

  console.log( `Orange is deployed to ${orange.address}` );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
