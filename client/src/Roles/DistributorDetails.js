import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import ProductDetails from "../ProductDetails";
import "./DistributorDetails.scss";

class DistributorDetails extends React.Component {
  state = {
    isDistributor: false,
    distributorId: null
  };

  createDistributor = async () => {
    const { supplyContract, setError, setNotification } = this.props;
    const { isDistributor, distributorId } = this.state;
    try {
      if (isDistributor) {
        setNotification(`You are a registered Distributor already.`);
        this.setState({
          distributorId
        });
      } else {
        const newDistributorId = await supplyContract.methods
          .addDistributor(distributorId)
          .send({ from: distributorId });

        setNotification(`Distributor id created for ${distributorId}`);
        this.setState({
          isDistributor: true,
          distributorId: newDistributorId
        });
      }
    } catch (err) {
      setError(err);
      console.log("Error mounting app");
    }
  };

  isDistributor = async () => {
    const { supplyContract, accounts } = this.props;
    const { distributorId } = this.state;
    const isDistributor = await supplyContract.methods
      .isDistributor(distributorId)
      .call();

    this.setState({
      isDistributor,
      distributorId: accounts[0]
    });
  };

  async componentDidMount() {
    this.setState(
      {
        distributorId: this.props.accounts[0] || ""
      },
      async () => {
        await this.isDistributor();
      }
    );
  }

  render() {
    const { accounts } = this.props;
    const { isDistributor, loading } = this.state;
    return (
      <section
        className={
          isDistributor
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
                value={accounts[0]}
                disabled
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

        {isDistributor && <ProductDetails />}
        {loading && (
          <div className="DistributorDetails-loading">
            Fetching Ethereum. Please wait...
          </div>
        )}
      </section>
    );
  }
}

export default DistributorDetails;
