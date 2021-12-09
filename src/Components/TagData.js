import React, { useEffect, useState } from "react";
import axios from "axios";

const TagData = () => {
  const [data, setData] = useState("");
  const getData = () => {
    axios
      .get("https://dummyapi.io/data/v1/tag", {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  var jsonStr = JSON.stringify(data);
  return <div>{jsonStr}</div>;
};

export default TagData;
