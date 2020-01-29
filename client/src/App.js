import React from "react";
import { CircularProgress, Typography, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import TxHistory from "./TxHistory";
import ContextSelector from "./ContextSelector";
import CardOption from "./components/CardOption";

import getWeb3 from "./getWeb3";

import "./App.scss";

export const CONTEXT = {
  farmer: "FARMER",
  distributor: "DISTRIBUTOR",
  retailer: "RETAILER",
  consumer: "CONSUMER"
};

const roleOptions = [
  {
    id: CONTEXT.farmer,
    title: "Farmer",
    description: "Description",
    image: require("./images/farmer.jpeg"),
    error: null
  },
  {
    id: CONTEXT.distributor,
    title: "Distributor",
    description: "Description",
    image: require("./images/coperativaCafe.png")
  },
  {
    id: CONTEXT.retailer,
    title: "Retailer",
    description: "Description",
    image: require("./images/retailer-cafe.jpeg")
  },
  {
    id: CONTEXT.consumer,
    title: "Consumer",
    description: "Description",
    image: require("./images/cupCofffe.jpg")
  }
];

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class App extends React.Component {
  state = {
    web3: null,
    account: null,
    supplyContract: null,
    userContext: "",
    txHistory: "",
    metamaskAddress: "",
    upc: "1",
    loading: true,
    notification: false
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

  setError = err => {
    this.setState({
      error: err,
      loading: false
    });
  };

  closeNotification = () => {
    this.setState({
      notification: false
    });
  };
  setNotification = message => {
    this.setState({
      notification: message
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

      this.setState(
        {
          web3,
          accounts,
          supplyContract: supplyContractInstance,
          loading: false
        },
        () => {
          // Fetch item
          this.fetchItemBufferOne();
          this.fetchItemBufferTwo();
        }
      );
    } catch (err) {
      this.setError(err);
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
      this.setError(err);
      console.log("Error mounting app");
    }
  };

  render() {
    const {
      web3,
      accounts,
      supplyContract,
      metamaskAddress,
      upc,
      userContext,
      txHistory,
      loading,
      error,
      notification
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Typography
            className="CoffeeCol-title"
            gutterBottom
            variant="h1"
            component="h1"
          >
            CoffeeCol
          </Typography>
          <div className="CoffeeCol-bar">
            <span></span>
            <span></span>
          </div>
          <Typography
            className="CoffeeCol-subtitle"
            gutterBottom
            variant="h4"
            component="h4"
          >
            Fair Trade Coffee
          </Typography>
        </header>

        {loading && <CircularProgress />}

        {!loading && !error && (
          <section
            className={
              userContext
                ? "colcoffee-main-wrapper flatten"
                : "colcoffee-main-wrapper"
            }
          >
            {userContext && (
              <div className="CoffeCol-goback" onClick={this.goBack}>
                <ArrowBackIosIcon /> Go back
              </div>
            )}

            {!userContext && (
              <div className="Context-selector">
                <Typography
                  className="CoffeeCol-subtitle left"
                  gutterBottom
                  variant="h4"
                  component="h4"
                >
                  First, tell us who you are:
                </Typography>
                <br />

                <section className="Context-selection">
                  {roleOptions.map((role, index) => (
                    <CardOption
                      key={index}
                      selectOption={this.setUserContext}
                      role={role}
                    />
                  ))}
                </section>
              </div>
            )}
          </section>
        )}

        {error && (
          <section className="Error-notice">
            <Typography
              className="Error-title"
              gutterBottom
              variant="h4"
              component="h4"
            >
              Ops, something went wrong.
            </Typography>

            <Typography
              className="Error-subtitle"
              gutterBottom
              variant="h4"
              component="h4"
            >
              Please reload the page or change your account. If the problem
              persist please write at andrescabsi@gmail.com
            </Typography>
            <br />
            <div className="Error-wrapper">{JSON.stringify(error)}</div>
          </section>
        )}

        {!error && (
          <section
            className={
              userContext
                ? "Core-Functionality-wrapper expanded"
                : "Core-Functionality-wrapper"
            }
          >
            <div className="Roles-Functionality-wrapper">
              {userContext && !error && (
                <ContextSelector
                  web3={web3}
                  accounts={accounts}
                  supplyContract={supplyContract}
                  userContext={userContext}
                  txHistory={txHistory}
                  metamaskAddress={metamaskAddress}
                  upc={upc}
                  setError={this.setError}
                  setNotification={this.setNotification}
                />
              )}
            </div>

            <div className="TXHistory-Functionality-wrapper">
              {userContext && txHistory && <TxHistory txHistory={txHistory} />}
            </div>
          </section>
        )}

        <Snackbar
          open={!!notification}
          autoHideDuration={6000}
          onClose={this.closeNotification}
        >
          <Alert onClose={this.closeNotification} severity="success">
            {notification}
          </Alert>
        </Snackbar>

        <footer>
          <Typography
            className="CoffeeCol-moto"
            gutterBottom
            variant="body1"
            component="p"
          >
            Prove the authenticity of coffee using the Ethereum blockchain.
          </Typography>
          <Typography
            className="CoffeeCol-moto"
            gutterBottom
            variant="body1"
            component="p"
          >
            Andres Cabrera @2019 All rights reserved.
          </Typography>
        </footer>
      </div>
    );
  }
}

export default App;
