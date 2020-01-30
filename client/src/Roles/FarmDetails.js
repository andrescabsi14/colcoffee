import React from "react";
import { TextField, Button, Typography, Snackbar } from "@material-ui/core";
import Web3 from "web3";
import "./FarmDetails.scss";

class FarmDetails extends React.Component {
  state = {
    farmerId: "",
    isFarmer: false,
    originFarmName: "",
    originFarmInformation: "",
    originFarmLatitude: "",
    originFarmLongitude: "",
    error: null,
    loading: false
  };

  createFarmer = async () => {
    const { supplyContract, setError, setNotification } = this.props;
    const { farmerId, isFarmer } = this.state;

    this.setState({
      loading: true
    });

    try {
      if (isFarmer) {
        setNotification(`You are a registered farmer already.`);
        this.setState({
          farmerId
        });
      } else {
        const newFarmerId = await supplyContract.methods
          .addFarmer(farmerId)
          .send({ from: farmerId });

        setNotification(`Farmer id created for ${farmerId}`);
        this.setState({
          farmerId: newFarmerId
        });
      }
    } catch (err) {
      setError(err);
      console.log("Error mounting app");
    }
  };
  handleChange = (fieldId, value) => {
    this.setState({
      [fieldId]: value
    });
  };

  setLocalError = error => {
    this.setState({
      loading: false,
      error: JSON.stringify(error)
    });
  };

  harvestCoffee = async () => {
    const { upc, supplyContract, setNotification } = this.props;
    const {
      farmerId,
      originFarmName,
      originFarmInformation,
      originFarmLatitude,
      originFarmLongitude
    } = this.state;

    try {
      const newUPC = upc + 1;
      const harvestCoffee = await supplyContract.methods
        .harvestItem(
          newUPC,
          farmerId,
          originFarmName,
          originFarmInformation,
          originFarmLatitude,
          originFarmLongitude,
          "Note"
        )
        .send({ from: farmerId });

      setNotification(`Farmer harvested coffee successfully`);
      this.setState({
        error: null,
        loading: false,
        originFarmName: "",
        originFarmInformation: "",
        originFarmLatitude: "",
        originFarmLongitude: ""
      });
    } catch (err) {
      this.setLocalError(err);
      console.log("Error harvesting coffee");
    }
  };

  processCoffee = async () => {
    const { upc, supplyContract, setNotification } = this.props;
    const { farmerId } = this.state;

    try {
      const processCoffee = await supplyContract.methods
        .processItem(upc)
        .send({ from: farmerId });

      setNotification(`Farmer processed coffee successfully`);
      this.setState({
        error: null,
        loading: false
      });
    } catch (err) {
      this.setLocalError(err);
      console.log("Error processig coffee");
    }
  };

  packCoffee = async () => {
    const { upc, supplyContract, setNotification } = this.props;
    const { farmerId } = this.state;

    try {
      const packCoffee = await supplyContract.methods
        .packItem(upc)
        .send({ from: farmerId });

      setNotification(`Farmer packed the coffee successfully`);
      this.setState({
        error: null,
        loading: false
      });
    } catch (err) {
      this.setLocalError(err);
      console.log("Error packing coffee");
    }
  };

  sellCoffee = async () => {
    const { upc, supplyContract, setNotification } = this.props;
    const { farmerId } = this.state;
    try {
      const walletBalance = Web3.utils.toWei("10", "ether").toString();
      const coffeePrice = Web3.utils.toWei("10", "wei").toString();
      const sellCoffee = await supplyContract.methods
        .sellItem(upc, coffeePrice)
        .send({ from: farmerId });

      setNotification(`The coffee is for sale now`);
      this.setState({
        error: null,
        loading: false
      });
    } catch (err) {
      this.setLocalError(err);
      console.log("Error selling coffee");
    }
  };

  handleAction = actionType => {
    const { setNotification } = this.props;
    const {
      farmerId,
      originFarmName,
      originFarmInformation,
      originFarmLatitude,
      originFarmLongitude
    } = this.state;

    this.setState({
      loading: true
    });

    switch (actionType) {
      case "harvest":
        {
          const fieldsFilled =
            farmerId &&
            originFarmName &&
            originFarmInformation &&
            originFarmLatitude &&
            originFarmLongitude;

          if (fieldsFilled) {
            this.harvestCoffee();
          } else {
            setNotification(
              `Please complete all the required form fields before perform an action.`
            );
          }
        }
        break;
      case "process":
        this.processCoffee();
        break;
      case "pack":
        this.packCoffee();
        break;

      case "forSale":
        this.sellCoffee();
        break;
      default:
        break;
    }
  };

  isFarmer = async () => {
    const { supplyContract, accounts } = this.props;
    const isFarmer = await supplyContract.methods.isFarmer(accounts[0]).call();
    this.setState({
      isFarmer,
      farmerId: accounts[0]
    });
  };

  async componentDidMount() {
    await this.isFarmer();
  }

  render() {
    const { accounts } = this.props;
    const {
      isFarmer,
      farmerId,
      originFarmName,
      originFarmInformation,
      originFarmLatitude,
      originFarmLongitude,
      error,
      loading
    } = this.state;
    return (
      <section
        className={
          isFarmer ? "FarmDetail-wrapper extended" : "FarmDetail-wrapper"
        }
      >
        <div className="FarmDetail-newfarmer">
          {!isFarmer ? (
            <>
              <Typography variant="h4">Create Farmer user</Typography>
              <Typography variant="body1">
                Before interacting with the system, we need you to register with
                your current address.
              </Typography>
              <br />
              <Typography variant="h6">Detected account addresses:</Typography>
              {!!accounts.length &&
                accounts.map((account, index) => (
                  <div key={index}>{account}</div>
                ))}

              <br />

              <div className="FarmDetail-formWrapper">
                <div className="FarmDetail-Input">
                  <TextField
                    label="Farmer ID"
                    multiline
                    rowsMax="1"
                    value={farmerId}
                    disabled={isFarmer ? true : false}
                  />
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.createFarmer}
                >
                  Create Farmer
                </Button>
              </div>
            </>
          ) : (
            <>
              <Typography variant="h4">Farmer Address</Typography>
              <Typography variant="body1">{farmerId}</Typography>
              {loading && (
                <div className="FarmDetail-loading">
                  Fetching Ethereum. Please wait...
                </div>
              )}
            </>
          )}
        </div>

        {isFarmer && (
          <div className="FarmDetail-farmDetails">
            <Typography variant="h4">Edit Farm Details</Typography>
            <div className="FarmDetail-formWrapper">
              <div className="FarmDetails-Input">
                <TextField
                  label="Farmer ID"
                  multiline
                  rowsMax="1"
                  value={farmerId}
                  onChange={e => this.handleChange("farmerId", e.target.value)}
                  disabled
                />
              </div>
              <div className="FarmDetails-Input">
                <TextField
                  label="Farm Name"
                  multiline
                  rowsMax="1"
                  value={originFarmName}
                  onChange={e =>
                    this.handleChange("originFarmName", e.target.value)
                  }
                />
              </div>
              <div className="FarmDetails-Input">
                <TextField
                  label="Farm Information"
                  multiline
                  rowsMax="1"
                  value={originFarmInformation}
                  onChange={e =>
                    this.handleChange("originFarmInformation", e.target.value)
                  }
                />
              </div>
              <div className="FarmDetails-Input">
                <TextField
                  label="Farm Latitude"
                  multiline
                  rowsMax="1"
                  placeholder="-38.239770"
                  value={originFarmLatitude}
                  onChange={e =>
                    this.handleChange("originFarmLatitude", e.target.value)
                  }
                />
              </div>
              <div className="FarmDetails-Input">
                <TextField
                  label="Farm Longitude"
                  multiline
                  rowsMax="1"
                  placeholder="144.341490"
                  value={originFarmLongitude}
                  onChange={e =>
                    this.handleChange("originFarmLongitude", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="FarmDetails-Actions">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => this.handleAction("harvest")}
              >
                Harvest
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => this.handleAction("process")}
              >
                Process
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => this.handleAction("pack")}
              >
                Pack
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => this.handleAction("forSale")}
              >
                ForSale
              </Button>
            </div>
            {error && (
              <div className="FarmDetails-Error">
                An error occurred. Please try again.
              </div>
            )}
          </div>
        )}
      </section>
    );
  }
}

export default FarmDetails;
