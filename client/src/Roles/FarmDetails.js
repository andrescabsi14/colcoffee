import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import "./FarmDetails.scss";

class FarmDetails extends React.Component {
  state = {
    farmerId: null
  };

  createFarmer = () => {
    this.setState({
      farmerId: 123
    });
  };
  handleChange = fieldId => {};
  handleAction = actionType => {};

  render() {
    const { txHistory, account } = this.props;
    const { farmerId } = this.state;
    return (
      <section
        className={
          farmerId ? "FarmDetail-wrapper extended" : "FarmDetail-wrapper"
        }
      >
        <div className="FarmDetail-newfarmer">
          <Typography variant="h4">Create Farmer user</Typography>
          <Typography variant="body1">
            Before interacting with the system, we need you to register with
            your current address.
          </Typography>
          <br />
          <div className="FarmDetail-formWrapper">
            <div className="FarmDetail-Input">
              <TextField
                label="Farmer ID"
                multiline
                rowsMax="1"
                value={account}
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
                  value={account}
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
