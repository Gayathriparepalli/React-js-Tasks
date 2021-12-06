import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DisplayDashBoard from "./DisplayDashBoard";
const DashBoard = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [view, setView] = useState({});
  localStorage.setItem("singleUser", JSON.stringify(view));
  const getData = () => {
    axios
      .get("https://dummyapi.io/data/v1/user/", {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteData = (id) => {
    console.log(id);
    axios
      .delete(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res);
        console.log("data deleted successfully");
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateData = (data) => {
    console.log(data);
    let { id, firstName, lastName, title, picture } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("title", title);
    localStorage.setItem("picture", picture);
    history.push("/editUser");
  };
  const handleView = (id) => {
    console.log(id);
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res.data);
        setView(res.data);
        history.push("/viewData");
      });
  };
  const viewPosts = (id) => {
    history.push("/posts");
    localStorage.setItem("postsId", id);
  };

  return (
    <DisplayDashBoard
      data={data}
      deleteData={deleteData}
      updateData={updateData}
      handleView={handleView}
      viewPosts={viewPosts}
    />
  );
};

export default DashBoard;
