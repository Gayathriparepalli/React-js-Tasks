import React from "react";

const ViewRawData = () => {
  var jsonStr = localStorage.getItem("singleUser");
  return <div style={{ marginBottom: 100 }}>{jsonStr}</div>;
};

export default ViewRawData;
