import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import "./ProductOverview.scss";

const ProductOverview = () => {
  const handleChange = actionType => {};
  const handleAction = actionType => {};
  return (
    <section className="ProductOverview-wrapper">
      <Typography variant="h4">Product Overview</Typography>
      <div className="ProductOverview-formWrapper">
        <div className="ProductOverview-Input">
          <TextField
            label="SKU"
            multiline
            rowsMax="1"
            onChange={() => handleChange("SKU")}
          />
        </div>
        <div className="ProductOverview-Input">
          <TextField
            label="UPC"
            multiline
            rowsMax="1"
            onChange={() => handleChange("UPC")}
          />
        </div>
        <div className="ProductOverview-Input">
          <TextField
            label="Current Owner ID"
            multiline
            rowsMax="1"
            placeholder={"0x963865f57804b38459dd4b2da2f760211a200438"}
            onChange={() => handleChange("UPC")}
          />
        </div>

        <div className="ProductOverviews-Actions">
          <Button
            variant="contained"
            color="secondary"
            data-id="9"
            onClick={() => handleAction("fetchData1")}
          >
            Fetch Data 1
          </Button>

          <Button
            variant="contained"
            color="secondary"
            data-id="10"
            onClick={() => handleAction("fetchData2")}
          >
            Fetch Data 2
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
