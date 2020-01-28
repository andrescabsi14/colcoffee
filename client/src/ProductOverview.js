import React from "react";

const ProductOverview = () => {
  return (
    <>
      <h2>Product Overview</h2>
      <div className="form-group">
        SKU
        <input
          className="input-field"
          type="number"
          id="sku"
          name="sku"
          value="1"
        />
        UPC
        <input type="number" id="upc" name="upc" value="1" />
        Current Owner ID
        <input
          type="text"
          id="ownerID"
          name="ownerID"
          value="0x963865f57804b38459dd4b2da2f760211a200438"
          size="50"
        />
        <div className="button-div">
          <button
            className="btn-fetchOne"
            id="button"
            type="button"
            data-id="9"
          >
            Fetch Data 1
          </button>
          <button
            className="btn-fetchTwo"
            id="button"
            type="button"
            data-id="10"
          >
            Fetch Data 2
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
