import Web3 from "web3";

const getWeb3 = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      return web3;
    } catch (err) {
      console.error(err);
    }
  } else if (window.web3) {
    const web3 = window.web3;
    console.log("Injected web3 detected");
    return web3;
  } else {
    const web3Fallback = await new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );

    return web3Fallback;
  }
};

export default getWeb3;
