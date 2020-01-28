import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";

const FarmDetails = ({ txHistory, account }) => {
  const createFarmer = () => {};
  const handleChange = fieldId => {};
  const handleAction = actionType => {};

  return (
    <>
      <Button variant="contained" color="primary" onClick={createFarmer}>
        Create Farmer
      </Button>

      <Typography variant="h4">Farm Details</Typography>
      <div className="FarmDetails-wrapper">
        <div className="FarmDetails-Input">
          <TextField label="Farmer ID" multiline rowsMax="1" value={account} />
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
    </>
  );
};

export default FarmDetails;
