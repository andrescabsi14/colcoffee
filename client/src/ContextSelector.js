import React from "react";
import { Typography } from "@material-ui/core";

import { CONTEXT } from "./App";

import ProductOverview from "./ProductOverview";
import FarmDetails from "./FarmDetails";
import ProductDetails from "./ProductDetails";

import "./ContextSelector.scss";

const ContextSelector = ({
  web3,
  account,
  supplyContract,
  userContext,
  txHistory,
  metamaskAddress,
  upc
}) => {
  switch (userContext) {
    case CONTEXT.farmer: {
      return (
        <>
          <Typography variant="h3">Farmer</Typography>
          <FarmDetails
            web3={web3}
            account={account}
            supplyContract={supplyContract}
            userContext={userContext}
            txHistory={txHistory}
            metamaskAddress={metamaskAddress}
            upc={upc}
          />
          <ProductOverview />
        </>
      );
    }
    case CONTEXT.distributor: {
      return (
        <>
          <h2>distributor</h2>
          <ProductDetails />
          <ProductOverview />
        </>
      );
    }
    case CONTEXT.retailer: {
      return (
        <>
          <h2>retailer</h2>
          <ProductDetails />
          <ProductOverview />
        </>
      );
    }
    case CONTEXT.consumer: {
      return (
        <>
          <h2>Consumer</h2>
          <ProductOverview />
        </>
      );
    }
    default: {
      return <div>No context found</div>;
    }
  }
};

export default ContextSelector;
