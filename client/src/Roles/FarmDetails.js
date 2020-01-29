import React from "react";
import { TextField, Button, Typography, Snackbar } from "@material-ui/core";

import "./FarmDetails.scss";

class FarmDetails extends React.Component {
  state = {
    farmerId: null,
    inputFarmerId: ""
  };

  createFarmer = async () => {
    const { supplyContract, setError, setNotification } = this.props;
    const { inputFarmerId, farmerId } = this.state;
    try {
      if (farmerId) {
        setNotification(`You are a registered farmer already.`);
        this.setState({
          farmerId: inputFarmerId
        });
      } else {
        const newFarmerId = await supplyContract.methods
          .addFarmer(inputFarmerId)
          .send({ from: inputFarmerId });

        setNotification(`Farmer id created for ${inputFarmerId}`);
        this.setState({
          farmerId: newFarmerId
        });
      }
    } catch (err) {
      setError(err);
      console.log("Error mounting app");
    }
  };
  handleChange = fieldId => {};
  handleAction = actionType => {};

  isFarmer = async () => {
    const { supplyContract } = this.props;
    const { inputFarmerId } = this.state;
    const isFarmer = await supplyContract.methods
      .isFarmer(inputFarmerId)
      .call();

    this.setState({
      farmerId: isFarmer ? inputFarmerId : null
    });
  };

  async componentDidMount() {
    this.setState(
      {
        inputFarmerId: this.props.accounts[0] || null
      },
      async () => {
        await this.isFarmer();
      }
    );
  }

  render() {
    const { txHistory, accounts } = this.props;
    const { farmerId, inputFarmerId } = this.state;
    return (
      <section
        className={
          farmerId ? "FarmDetail-wrapper extended" : "FarmDetail-wrapper"
        }
      >
        <div className="FarmDetail-newfarmer">
          {!farmerId ? (
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
                    value={inputFarmerId}
                    disabled
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
            </>
          )}
        </div>

        {farmerId && (
          <div className="FarmDetail-farmDetails">
            <Typography variant="h4">Edit Farm Details</Typography>
            <div className="FarmDetail-formWrapper">
              <div className="FarmDetails-Input">
                <TextField
                  label="Farmer ID"
                  multiline
                  rowsMax="1"
                  value={farmerId}
                  disabled
                />
              </div>
              <div className="FarmDetails-Input">
                <TextField
                  label="Farm Name"
                  multiline
                  rowsMax="1"
                  value={txHistory.originFarmName}
                  onChange={() => this.handleChange("originFarmName")}
                />
              </div>
              <div className="FarmDetails-Input">
                <TextField
                  label="Farm Information"
                  multiline
                  rowsMax="1"
                  value={txHistory.originFarmInformation}
                  onChange={() => this.handleChange("originFarmInformation")}
                />
              </div>
              <div className="FarmDetails-Input">
                <TextField
                  label="Farm Latitude"
                  multiline
                  rowsMax="1"
                  placeholder="-38.239770"
                  value={txHistory.originFarmLatitude}
                  onChange={() => this.handleChange("originFarmLatitude")}
                />
              </div>
              <div className="FarmDetails-Input">
                <TextField
                  label="Farm Longitude"
                  multiline
                  rowsMax="1"
                  placeholder="144.341490"
                  value={txHistory.originFarmLongitude}
                  onChange={() => this.handleChange("originFarmLongitude")}
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
                onClick={() => this.handleAction("forsale")}
              >
                ForSale
              </Button>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default FarmDetails;
