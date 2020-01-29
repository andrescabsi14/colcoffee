import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import "./FarmDetails.scss";

const FarmDetails = ({ txHistory, account }) => {
  const createFarmer = () => {};
  const handleChange = fieldId => {};
  const handleAction = actionType => {};

  return (
    <section className="FarmDetail-wrapper">
      <div className="FarmDetail-newfarmer">
        <Typography variant="h4">Create Farmer user</Typography>
        <Typography variant="body1">
          Before interacting with the system, we need you to register with your
          current address.
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
          <Button variant="contained" color="secondary" onClick={createFarmer}>
            Create Farmer
          </Button>
        </div>
      </div>

      <div className="FarmDetail-farmDetails">
        <Typography variant="h4">Farm Details</Typography>
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
              onChange={() => handleChange("originFarmName")}
            />
          </div>
          <div className="FarmDetails-Input">
            <TextField
              label="Farm Information"
              multiline
              rowsMax="1"
              value={txHistory.originFarmInformation}
              onChange={() => handleChange("originFarmInformation")}
            />
          </div>
          <div className="FarmDetails-Input">
            <TextField
              label="Farm Latitude"
              multiline
              rowsMax="1"
              placeholder="-38.239770"
              value={txHistory.originFarmLatitude}
              onChange={() => handleChange("originFarmLatitude")}
            />
          </div>
          <div className="FarmDetails-Input">
            <TextField
              label="Farm Longitude"
              multiline
              rowsMax="1"
              placeholder="144.341490"
              value={txHistory.originFarmLongitude}
              onChange={() => handleChange("originFarmLongitude")}
            />
          </div>
        </div>

        <div className="FarmDetails-Actions">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleAction("harvest")}
          >
            Harvest
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleAction("process")}
          >
            Process
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleAction("pack")}
          >
            Pack
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleAction("forsale")}
          >
            ForSale
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FarmDetails;
