import React from "react";

const ProductDetails = () => {
  return (
    <>
      <h2>Product Details</h2>
      <div className="form-group">
        Product Notes
        <input
          type="text"
          id="productNotes"
          name="productNotes"
          value="Best beans for Espresso"
          size="60"
        />
        Product Price
        <input type="number" id="productPrice" name="productPrice" value="1" />
        ETH Distributor ID
        <input
          type="text"
          id="distributorID"
          name="distributorID"
          value="0xf1b1bcd24dad92303dd9fe78be639f7bcf9c238d"
          size="50"
        />
        Retailer ID
        <input
          type="text"
          id="retailerID"
          name="retailerID"
          value="0x0fb2bfefd526966c87efa19f6693d50971763fc2"
          size="50"
        />
        Distributor ID
        <input
          type="text"
          id="consumerID"
          name="consumerID"
          value="0x5d777e9127b28fb119e81a6304278a0a21bef1c4"
          size="50"
        />
        <button className="btn-buy" id="button" type="button" data-id="5">
          Buy
        </button>
        <button className="btn-ship" id="button" type="button" data-id="6">
          Ship
        </button>
        <button className="btn-receive" id="button" type="button" data-id="7">
          Receive
        </button>
        <button className="btn-purchase" id="button" type="button" data-id="8">
          Purchase
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
