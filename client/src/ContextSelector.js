import React from "react";
import { Typography } from "@material-ui/core";

import { CONTEXT } from "./App";

import ProductOverview from "./ProductOverview";
import FarmDetails from "./Roles/FarmDetails";
import DistributorDetails from "./Roles/DistributorDetails";
import RetailerDetails from "./Roles/RetailerDetails";
import ConsumerDetails from "./Roles/ConsumerDetails";

import "./ContextSelector.scss";

const ContextSelector = ({
  web3,
  accounts,
  supplyContract,
  userContext,
  txHistory,
  metamaskAddress,
  upc,
  setError
}) => {
  switch (userContext) {
    case CONTEXT.farmer: {
      return (
        <>
          <Typography variant="h3">Farmer</Typography>
          <br />
          <div className="inner-content">
            <FarmDetails
              web3={web3}
              accounts={accounts}
              supplyContract={supplyContract}
              userContext={userContext}
              txHistory={txHistory}
              metamaskAddress={metamaskAddress}
              upc={upc}
              setError={setError}
            />
            <ProductOverview />
          </div>
        </>
      );
    }
    case CONTEXT.distributor: {
      return (
        <>
          <Typography variant="h3">Distributor</Typography>
          <br />
          <div className="inner-content">
            <DistributorDetails
              web3={web3}
              accounts={accounts}
              supplyContract={supplyContract}
              userContext={userContext}
              txHistory={txHistory}
              metamaskAddress={metamaskAddress}
              upc={upc}
              setError={setError}
            />
            <ProductOverview />
          </div>
        </>
      );
    }
    case CONTEXT.retailer: {
      return (
        <>
          <Typography variant="h3">Retailer</Typography>
          <br />
          <div className="inner-content">
            <RetailerDetails
              web3={web3}
              accounts={accounts}
              supplyContract={supplyContract}
              userContext={userContext}
              txHistory={txHistory}
              metamaskAddress={metamaskAddress}
              upc={upc}
              setError={setError}
            />
            <ProductOverview />
          </div>
        </>
      );
    }
    case CONTEXT.consumer: {
      return (
        <>
          <Typography variant="h3">Consumer</Typography>
          <br />
          <div className="inner-content">
            <ConsumerDetails
              web3={web3}
              accounts={accounts}
              supplyContract={supplyContract}
              userContext={userContext}
              txHistory={txHistory}
              metamaskAddress={metamaskAddress}
              upc={upc}
              setError={setError}
            />
            <ProductOverview />
          </div>
        </>
      );
    }
    default: {
      return <div>No context found</div>;
    }
  }
};

export default ContextSelector;
