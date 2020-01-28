import React from "react";

const TxHistory = ({ txHistory }) => {
  return (
    <>
      <h2>Transaction History</h2>
      <div className="TxHistory-wrapper">{JSON.stringify(txHistory)}</div>
    </>
  );
};

export default TxHistory;
