import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DisplayViewPostsData from "./DisplayViewPostsData";
const ViewPostData = () => {
  let arr = [];
  arr.push(JSON.parse(localStorage.getItem("singlePost")));
  const [comment, setComment] = useState([]);
  const commentId = localStorage.getItem("commentId");
  const [data, setData] = useState("");

  const getData = async () => {
    await axios
      .get(`https://dummyapi.io/data/v1/post/${commentId}/comment`, {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setComment(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (id) => {
    if (data === "") {
      alert("enter comment");
    } else {
      const randomId = JSON.parse(localStorage.getItem("allData"));
      const ownerId = randomId.map((val) => val["id"]);
      const randomownerId = ownerId[Math.floor(Math.random() * ownerId.length)];
      console.log(randomownerId, id);
      const values = {
        message: data,
        owner: randomownerId,
        post: id,
      };
      axios
        .post("https://dummyapi.io/data/v1/comment/create", values, {
          headers: {
            "app-id": "61ab14be3451350f187c1429",
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log("data added successfully");
          toast.success("comment added successfully");
          getData();
        })
        .catch((err) => console.log(err));
      setData("");
    }
  };

  const deleteComment = (id) => {
    console.log(id);
    axios
      .delete(`https://dummyapi.io/data/v1/comment/${id}`, {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res);
        console.log("data deleted successfully");
        toast.success("comment deleted successfully");
        getData();
      });
  };

  return (
    <div>
      <DisplayViewPostsData
        arr={arr}
        handleSubmit={handleSubmit}
        deleteComment={deleteComment}
        comment={comment}
        data={data}
        setData={setData}
      />
    </div>
  );
};
export default ViewPostData;
