import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import "./ProductOverview.scss";

class ProductOverview extends React.Component {
  state = {
    upc: "",
    searchResult: null,
    error: null,
    loading: false
  };

  fetchData = async buffer => {
    const {
      supplyContract,
      accounts,
      setNotification,
      setTxHistory
    } = this.props;
    const { upc } = this.state;

    if (!upc) {
      this.setState({
        error: "Please set a valid UPC"
      });
      return;
    }

    let fetchedItems;

    this.setState(
      {
        loading: true
      },
      async () => {
        try {
          if (buffer === 2) {
            fetchedItems = await supplyContract.methods
              .fetchItemBufferTwo(Number(upc))
              .call({ from: accounts[0] });
          } else {
            fetchedItems = await supplyContract.methods
              .fetchItemBufferOne(Number(upc))
              .call({ from: accounts[0] });
          }
          setTxHistory(fetchedItems);
          this.setState({
            error: null,
            loading: false
          });
          setNotification(`Buffer ${buffer} fetched successfully`);
        } catch (err) {
          this.setState({ error: err, loading: false });
          console.log("Error in product overview");
        }
      }
    );
  };

  changeUPC = value => {
    this.setState({
      upc: value
    });
  };

  componentDidMount() {
    this.setState({
      upc: this.props.upc
    });
  }

  render() {
    const { upc, error, loading } = this.state;

    return (
      <section className="ProductOverview-wrapper">
        <Typography variant="h4">Product Overview</Typography>
        <div className="ProductOverview-formWrapper">
          <div className="ProductOverview-Input">
            <TextField
              label="UPC"
              multiline
              rowsMax="1"
              value={upc}
              onChange={e => this.changeUPC(e.target.value)}
            />
          </div>

          <div className="ProductOverviews-Actions">
            <Button
              variant="contained"
              color="secondary"
              data-id="9"
              onClick={() => this.fetchData(1)}
            >
              Fetch Data 1
            </Button>

            <Button
              variant="contained"
              color="secondary"
              data-id="10"
              onClick={() => this.fetchData(2)}
            >
              Fetch Data 2
            </Button>
          </div>

          {loading && (
            <div className="ProductOverview-loading">
              Fetching Ethereum. Please wait...
            </div>
          )}

          {error && (
            <div className="ProductOverview-error">
              Error: {JSON.stringify(error)}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default ProductOverview;
