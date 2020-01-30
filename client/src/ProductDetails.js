import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const handleChange = actionType => {};
  const handleAction = actionType => {};
  return (
    <section className="ProductDetails-wrapper">
      <Typography variant="h4">Product Details</Typography>
      <div className="ProductDetails-formWrapper">
        <div className="ProductDetails-Input">
          <TextField
            label="Product Notes"
            multiline
            rowsMax="1"
            placeholder={"Best beans for Espresso"}
            onChange={() => handleChange("notes")}
          />
        </div>
        <div className="ProductDetails-Input">
          <TextField
            label="Product Price"
            multiline
            rowsMax="1"
            onChange={() => handleChange("price")}
          />
        </div>
        <div className="ProductDetails-Input">
          <TextField
            label="ETH Distributor ID"
            multiline
            rowsMax="1"
            placeholder="0xf1b1bcd24dad92303dd9fe78be639f7bcf9c238d"
            onChange={() => handleChange("distributorId")}
          />
        </div>

        <div className="ProductDetails-Input">
          <TextField
            label="Retailer ID"
            multiline
            rowsMax="1"
            placeholder="0x0fb2bfefd526966c87efa19f6693d50971763fc2"
            onChange={() => handleChange("retailerId")}
          />
        </div>

        <div className="ProductDetails-Input">
          <TextField
            label="Consumer ID"
            multiline
            rowsMax="1"
            placeholder="0x5d777e9127b28fb119e81a6304278a0a21bef1c4"
            onChange={() => handleChange("consumerId")}
          />
        </div>

        <div className="ProductOverviews-Actions">
          <Button
            variant="contained"
            color="secondary"
            data-id="5"
            onClick={() => handleAction("buy")}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            color="secondary"
            data-id="6"
            onClick={() => handleAction("ship")}
          >
            Ship
          </Button>

          <Button
            variant="contained"
            color="secondary"
            data-id="7"
            onClick={() => handleAction("receive")}
          >
            Receive
          </Button>

          <Button
            variant="contained"
            color="secondary"
            data-id="8"
            onClick={() => handleAction("purchase")}
          >
            Purchase
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
