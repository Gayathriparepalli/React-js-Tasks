import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DisplayEditData from "./DisplayEditData";
import { toast } from "react-toastify";
const EditData = () => {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const history = useHistory();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setTitle(localStorage.getItem("title"));
    setPicture(localStorage.getItem("picture"));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://dummyapi.io/data/v1/user/${id}`,
        {
          title,
          firstName,
          lastName,
          picture,
        },
        {
          headers: {
            "app-id": "61ab14be3451350f187c1429",
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("data updated successfully");
        console.log("data updated successfully");
      });

    history.push("/dashboard");
  };

  return (
    <div>
      <DisplayEditData
        firstName={firstName}
        lastName={lastName}
        title={title}
        picture={picture}
        handleUpdate={handleUpdate}
        setTitle={setTitle}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPicture={setPicture}
      />
    </div>
  );
};

export default EditData;
