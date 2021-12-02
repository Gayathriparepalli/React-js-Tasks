import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const DashBoard = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [view, setView] = useState({});
  localStorage.setItem("singleUser", JSON.stringify(view));
  const getData = () => {
    axios
      .get("https://dummyapi.io/data/v1/user/", {
        headers: {
          "app-id": "61a740465e6d06db1da70941",
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
          "app-id": "61a740465e6d06db1da70941",
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
          "app-id": "61a740465e6d06db1da70941",
        },
      })
      .then((res) => {
        console.log(res.data);
        setView(res.data);
        history.push("/viewData");
      });
  };
  return (
    <div style={{ marginBottom: 100 }}>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/addUser")}
      >
        Add User
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list, index) => (
            <tr key={list.id}>
              <td>{index + 1}</td>
              <td>{list.title}</td>
              <td>{list.firstName}</td>
              <td>{list.lastName}</td>
              <td>
                <img
                  src={list.picture}
                  alt="not found"
                  style={{ height: 100, width: 100 }}
                ></img>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleView(list.id)}
                >
                  view
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => updateData(list)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteData(list.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ViewRawData view={view} /> */}
    </div>
  );
};

export default DashBoard;
