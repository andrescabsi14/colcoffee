import React, { useState, useEffect } from "react";
import Web3 from "web3";
import TxHistory from "./TxHistory";
import ContextSelector from "./ContextSelector";
import { default as TruffleContract } from "@truffle/contract";
import "./App.scss";

export const CONTEXT = {
  farmer: "FARMER",
  distributor: "DISTRIBUTOR",
  retailer: "RETAILER",
  consumer: "CONSUMER"
};

function App() {
  const [userContext, setUserContext] = useState("");
  const [txHistory, setTxHistory] = useState("");
  const [metamaskAccountID, setMetamaskAccountID] = useState("");
  const [upc, setUpc] = useState("1");

  const selectContext = context => {
    setUserContext(context);
  };

  const loadHistory = history => {
    setTxHistory(history);
  };

  const getMetamaskAccountId = web3 => {
    web3.eth.getAccounts((err, res) => {
      if (err) {
        console.log("Error:", err);
        return;
      }
      console.log("getMetaskID:", res);
      setMetamaskAccountID(res[0]);
    });
  };

  const fetchItemBufferOne = async supplyChain => {
    // if (!upc) return;
    console.log("upc", upc);

    const supplyContract = await supplyChain.deployed();
    supplyContract
      .then(instance => {
        return instance.fetchItemBufferOne(upc);
      })
      .then(result => {
        setTxHistory(result);
        console.log("fetchItemBufferOne", result);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  };

  const fetchItemBufferTwo = async supplyChain => {
    if (!upc) return;
    console.log("upc2", upc);

    await supplyChain
      .deployed()
      .then(instance => {
        return instance.fetchItemBufferTwo.call(upc);
      })
      .then(result => {
        setTxHistory(result);
        console.log("fetchItemBufferOne", result);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  };

  const initSupplyChain = web3Provider => {
    /// Source the truffle compiled smart contracts

    try {
      const SupplyChainABI = "/SupplyChain.json";

      fetch(SupplyChainABI).then(async response => {
        const SupplyChainArtifact = await response.json();
        let supplyChain = TruffleContract(SupplyChainArtifact);
        supplyChain.setProvider(web3Provider);
        console.log("data", response);

        await fetchItemBufferOne(supplyChain);
        await fetchItemBufferTwo(supplyChain);
        // App.fetchEvents();
      });
    } catch (err) {
      console.error(err);
    }
  };

  const initWeb3 = async () => {
    try {
      const web3Provider = new Web3(
        Web3.givenProvider || "http://localhost:8545"
      );
      getMetamaskAccountId(web3Provider);

      return initSupplyChain(web3Provider);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    initWeb3();
  }, []); // eslint-disable-line

  return (
    <div className="App">
      <header className="App-header">
        <h1>CoffeeCol</h1>
        <h4>Fair Trade Coffee</h4>
        <p>Prove the authenticity of coffee using the Ethereum blockchain.</p>
      </header>

      <section>
        {userContext && <div onClick={() => selectContext("")}>Go back</div>}

        <div className="Context-selector">
          {!userContext && (
            <>
              <h2>Who are you?</h2>
              <article onClick={() => selectContext(CONTEXT.farmer)}>
                Farmer
              </article>
              <article onClick={() => selectContext(CONTEXT.distributor)}>
                Distributor
              </article>
              <article onClick={() => selectContext(CONTEXT.retailer)}>
                Retailer
              </article>
              <article onClick={() => selectContext(CONTEXT.consumer)}>
                Consumer
              </article>
            </>
          )}
        </div>
      </section>

      {userContext && (
        <ContextSelector userContext={userContext} loadHistory={loadHistory} />
      )}
      {txHistory && <TxHistory txHistory={txHistory} />}
    </div>
  );
}

export default App;
