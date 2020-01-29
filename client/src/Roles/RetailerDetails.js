import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import ProductDetails from "../ProductDetails";
import "./RetailerDetails.scss";

class RetailerDetails extends React.Component {
  state = {
    retailerId: null
  };

  createRetailer = () => {
    this.setState({
      retailerId: 123
    });
  };
  handleChange = fieldId => {};
  handleAction = actionType => {};

  render() {
    const { txHistory, account } = this.props;
    const { retailerId } = this.state;
    return (
      <section
        className={
          retailerId
            ? "RetailerDetails-wrapper extended"
            : "RetailerDetails-wrapper"
        }
      >
        <div className="RetailerDetails-newRetailer">
          <Typography variant="h4">Create Retailer user</Typography>
          <Typography variant="body1">
            Before interacting with the system, we need you to register with
            your current address.
          </Typography>
          <br />
          <div className="FarmDetail-formWrapper">
            <div className="FarmDetail-Input">
              <TextField
                label="Retailer ID"
                multiline
                rowsMax="1"
                value={account}
              />
            </div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.createRetailer}
            >
              Create Retailer
            </Button>
          </div>
        </div>

        {retailerId && <ProductDetails />}
      </section>
    );
  }
}

export default RetailerDetails;
