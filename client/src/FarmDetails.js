import React from "react";

const FarmDetails = () => {
  return (
    <>
      <h2>Farm Details</h2>
      <div className="form-group">
        Farmer ID
        <input
          type="text"
          id="originFarmerID"
          name="originFarmerID"
          value="0x99c289eb2aacec289631a5ddf62cf27a63d4494f"
          size="50"
        />
        Farm Name
        <input
          type="text"
          id="originFarmName"
          name="originFarmName"
          value="John Doe"
        />
        Farm Information
        <input
          type="text"
          id="originFarmInformation"
          name="originFarmInformation"
          value="Yarra Valley"
        />
        Farm Latitude
        <input
          type="text"
          id="originFarmLatitude"
          name="originFarmLatitude"
          value="-38.239770"
        />
        Farm Longitude
        <input
          type="text"
          id="originFarmLongitude"
          name="originFarmLongitude"
          value="144.341490"
        />
        <button className="btn-harvest" id="button" type="button" data-id="1">
          Harvest
        </button>
        <button className="btn-process" id="button" type="button" data-id="2">
          Process
        </button>
        <button className="btn-pack" id="button" type="button" data-id="3">
          Pack
        </button>
        <button className="btn-forsale" id="button" type="button" data-id="4">
          ForSale
        </button>
      </div>
    </>
  );
};

export default FarmDetails;
