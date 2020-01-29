import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import "./ProductOverview.scss";

class ProductOverview extends React.Component {
  state = {
    upc: "",
    searchResult: null,
    error: null
  };

  fetchData = async buffer => {
    const { supplyContract, setError } = this.props;
    const { accounts, upc } = this.state;

    if (!upc) {
      this.setState({
        error: "Please set a valid UPC"
      });
      return;
    }

    let fetchedItems;

    try {
      if (buffer === 2) {
        fetchedItems = await supplyContract.methods
          .fetchItemBufferTwo(upc)
          .send({ from: accounts[0] });
      } else {
        fetchedItems = await supplyContract.methods
          .fetchItemBufferOne(upc)
          .send({ from: accounts[0] });
      }

      this.setState({
        fetchedItems,
        error: null
      });
    } catch (err) {
      this.setState({ error: err });
      console.log("Error in product overview");
    }
  };

  changeUPC = value => {
    this.setState({
      upc: value
    });
  };

  render() {
    const { searchResult, upc, error } = this.state;
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

          {error && (
            <div className="ProductOverview-error">
              Error: {JSON.stringify(error)}
            </div>
          )}
          {searchResult && (
            <div className="ProductOverview-searchResult">
              {JSON.stringify(searchResult)}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default ProductOverview;
