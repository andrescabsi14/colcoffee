import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import ProductDetails from "../ProductDetails";
import "./DistributorDetails.scss";

class DistributorDetails extends React.Component {
  state = {
    distributorId: null
  };

  createDistributor = () => {
    this.setState({
      distributorId: 123
    });
  };
  handleChange = fieldId => {};
  handleAction = actionType => {};

  render() {
    const { txHistory, account } = this.props;
    const { distributorId } = this.state;
    return (
      <section
        className={
          distributorId
            ? "DistributorDetails-wrapper extended"
            : "DistributorDetails-wrapper"
        }
      >
        <div className="DistributorDetails-newDistributor">
          <Typography variant="h4">Create Distributor user</Typography>
          <Typography variant="body1">
            Before interacting with the system, we need you to register with
            your current address.
          </Typography>
          <br />
          <div className="DistributorDetails-formWrapper">
            <div className="DistributorDetails-Input">
              <TextField
                label="Distributor ID"
                multiline
                rowsMax="1"
                value={account}
              />
            </div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.createDistributor}
            >
              Create Distributor
            </Button>
          </div>
        </div>

        {distributorId && <ProductDetails />}
      </section>
    );
  }
}

export default DistributorDetails;
