import React from "react";

import { CONTEXT } from "./App";

import ProductOverview from "./ProductOverview";
import FarmDetails from "./FarmDetails";
import ProductDetails from "./ProductDetails";

const ContextSelector = ({ userContext }) => {
  switch (userContext) {
    case CONTEXT.farmer: {
      return (
        <>
          <h2>Farmer</h2>
          <FarmDetails />
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
