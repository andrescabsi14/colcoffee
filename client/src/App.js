import React from "react";

import TxHistory from "./TxHistory";
import ContextSelector from "./ContextSelector";
// import { default as TruffleContract } from "@truffle/contract";

import getWeb3 from "./getWeb3";

import "./App.scss";

export const CONTEXT = {
  farmer: "FARMER",
  distributor: "DISTRIBUTOR",
  retailer: "RETAILER",
  consumer: "CONSUMER"
};

class App extends React.Component {
  state = {
    web3: null,
    account: null,
    supplyContract: null,
    userContext: "",
    txHistory: "",
    metamaskAddress: "",
    upc: "1"
  };

  fetchItemBufferOne = async () => {
    const { upc, supplyContract } = this.state;
    if (!upc) return;

    try {
      const result = await supplyContract.methods
        .fetchItemBufferOne(upc)
        .call();
      console.log(result);
      this.setState({
        txHistory: result
      });
    } catch (err) {
      console.error("Error fetchItemBufferOne");
    }
  };

  fetchItemBufferTwo = async () => {
    const { upc, supplyContract } = this.state;
    if (!upc) return;

    try {
      const result = await supplyContract.methods
        .fetchItemBufferTwo(upc)
        .call();
      console.log(result);
      this.setState({
        txHistory: result
      });
    } catch (err) {
      console.error("Error fetchItemBufferTwo");
    }
  };

  goBack = () => {
    this.setState({
      userContext: ""
    });
  };

  setUserContext = context => {
    this.setState({
      userContext: context
    });
  };

  startApp = async web3 => {
    try {
      // Get contract instance
      const networkId = await web3.eth.net.getId();
      const SupplyChainContract = await fetch(
        "/SupplyChain.json"
      ).then(response => response.json());
      const deployedNetwork = SupplyChainContract.networks[networkId];
      const supplyContractInstance = new web3.eth.Contract(
        SupplyChainContract.abi,
        deployedNetwork.address
      );

      // Get account address
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      this.setState(
        {
          web3,
          account,
          supplyContract: supplyContractInstance
        },
        () => {
          // Fetch item
          this.fetchItemBufferOne();
          this.fetchItemBufferTwo();
        }
      );
    } catch (err) {
      console.error("Error starting app");
      console.error(err);
    }
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      if (!web3) return;
      this.startApp(web3);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { userContext, txHistory } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>CoffeeCol</h1>
          <h4>Fair Trade Coffee</h4>
          <p>Prove the authenticity of coffee using the Ethereum blockchain.</p>
        </header>

        <section>
          {userContext && <div onClick={this.goBack}>Go back</div>}

          <div className="Context-selector">
            {!userContext && (
              <>
                <h2>Who are you?</h2>
                <article onClick={() => this.setUserContext(CONTEXT.farmer)}>
                  Farmer
                </article>
                <article
                  onClick={() => this.setUserContext(CONTEXT.distributor)}
                >
                  Distributor
                </article>
                <article onClick={() => this.setUserContext(CONTEXT.retailer)}>
                  Retailer
                </article>
                <article onClick={() => this.setUserContext(CONTEXT.consumer)}>
                  Consumer
                </article>
              </>
            )}
          </div>
        </section>

        {userContext && <ContextSelector userContext={userContext} />}
        {txHistory && <TxHistory txHistory={txHistory} />}
      </div>
    );
  }
}

export default App;
