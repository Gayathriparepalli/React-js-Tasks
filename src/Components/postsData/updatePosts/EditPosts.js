import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { DisplayEditPost } from "./DisplayEditPost";
import { toast } from "react-toastify";
const EditPosts = () => {
  const [id, setID] = useState(null);
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState("");
  const [tags, setTags] = useState("");
  const [text, setText] = useState("");
  const history = useHistory();
  useEffect(() => {
    setID(localStorage.getItem("PostID"));
    setImage(localStorage.getItem("Postimage"));
    setLikes(localStorage.getItem("Postlikes"));
    setTags(localStorage.getItem("PostTags"));
    setText(localStorage.getItem("PostText"));
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://dummyapi.io/data/v1/post/${id}`,
        {
          image,
          likes,
          tags,
          text,
        },
        {
          headers: {
            "app-id": "61ab14be3451350f187c1429",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("data updated successfully");
        toast.success("data updated successfully");
      });

    history.push("/posts");
  };

  return (
    <div>
      <DisplayEditPost
        handleUpdate={handleUpdate}
        image={image}
        likes={likes}
        tags={tags}
        text={text}
        setImage={setImage}
        setLikes={setLikes}
        setTags={setTags}
        setText={setText}
      />
    </div>
  );
};

export default EditPosts;
