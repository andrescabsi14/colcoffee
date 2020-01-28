import React from "react";

const TxHistory = ({ txHistory }) => {
  return (
    <>
      <h2>Transaction History</h2>
      <div className="TxHistory-wrapper">
        {txHistory.itemSKU && (
          <div className="preview-item">
            <div className="label">itemSKU:</div>
            <div className="value">{txHistory.itemSKU}</div>
          </div>
        )}

        {txHistory.itemUPC && (
          <div className="preview-item">
            <div className="label">itemUPC:</div>
            <div className="value">{txHistory.itemUPC}</div>
          </div>
        )}

        {txHistory.ownerID && (
          <div className="preview-item">
            <div className="label">ownerID:</div>
            <div className="value">{txHistory.ownerID}</div>
          </div>
        )}

        {txHistory.originFarmerID && (
          <div className="preview-item">
            <div className="label">originFarmerID:</div>
            <div className="value">{txHistory.originFarmerID}</div>
          </div>
        )}

        {txHistory.originFarmName && (
          <div className="preview-item">
            <div className="label">originFarmName:</div>
            <div className="value">{txHistory.originFarmName}</div>
          </div>
        )}

        {txHistory.originFarmInformation && (
          <div className="preview-item">
            <div className="label">originFarmInformation:</div>
            <div className="value">{txHistory.originFarmInformation}</div>
          </div>
        )}

        {txHistory.originFarmLatitude && (
          <div className="preview-item">
            <div className="label">originFarmLatitude:</div>
            <div className="value">{txHistory.originFarmLatitude}</div>
          </div>
        )}

        {txHistory.originFarmLongitude && (
          <div className="preview-item">
            <div className="label">originFarmLongitude:</div>
            <div className="value">{txHistory.originFarmLongitude}</div>
          </div>
        )}

        {txHistory.productID && (
          <div className="preview-item">
            <div className="label">productID:</div>
            <div className="value">{txHistory.productID}</div>
          </div>
        )}

        {txHistory.productNotes && (
          <div className="preview-item">
            <div className="label">productNotes:</div>
            <div className="value">{txHistory.productNotes}</div>
          </div>
        )}

        {txHistory.productPrice && (
          <div className="preview-item">
            <div className="label">productPrice:</div>
            <div className="value">{txHistory.productPrice}</div>
          </div>
        )}

        {txHistory.itemState && (
          <div className="preview-item">
            <div className="label">itemState:</div>
            <div className="value">{txHistory.itemState}</div>
          </div>
        )}

        {txHistory.distributorID && (
          <div className="preview-item">
            <div className="label">distributorID:</div>
            <div className="value">{txHistory.distributorID}</div>
          </div>
        )}
        {txHistory.retailerID && (
          <div className="preview-item">
            <div className="label">retailerID:</div>
            <div className="value">{txHistory.retailerID}</div>
          </div>
        )}
        {txHistory.consumerID && (
          <div className="preview-item">
            <div className="label">consumerID:</div>
            <div className="value">{txHistory.consumerID}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default TxHistory;
