import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import ProductDetails from "../ProductDetails";
import "./ConsumerDetails.scss";

class ConsumerDetails extends React.Component {
  state = {
    consumerId: null
  };

  createConsumer = () => {
    this.setState({
      consumerId: 123
    });
  };
  handleChange = fieldId => {};
  handleAction = actionType => {};

  render() {
    const { txHistory, account } = this.props;
    const { consumerId } = this.state;
    return (
      <section
        className={
          consumerId
            ? "ConsumerDetails-wrapper extended"
            : "ConsumerDetails-wrapper"
        }
      >
        <div className="ConsumerDetails-newConsumer">
          <Typography variant="h4">Create Consumer user</Typography>
          <Typography variant="body1">
            Before interacting with the system, we need you to register with
            your current address.
          </Typography>
          <br />
          <div className="ConsumerDetails-formWrapper">
            <div className="ConsumerDetails-Input">
              <TextField
                label="Consumer ID"
                multiline
                rowsMax="1"
                value={account}
              />
            </div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.createConsumer}
            >
              Create Consumer
            </Button>
          </div>
        </div>

        {consumerId && <ProductDetails />}
      </section>
    );
  }
}

export default ConsumerDetails;
