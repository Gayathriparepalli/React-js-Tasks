import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DisplayPosts from "./DisplayPosts";
import { toast } from "react-toastify";
const Posts = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const postId = localStorage.getItem("postsId");
  const [viewPost, setViewPost] = useState({});
  localStorage.setItem("singlePost", JSON.stringify(viewPost));
  const getData = () => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${postId}/post`, {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setPosts(res.data.data);
        localStorage.setItem("randomPostsId", JSON.stringify(res.data.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  const deletePost = (id) => {
    console.log(id);
    axios
      .delete(`https://dummyapi.io/data/v1/post/${id}`, {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res);
        console.log("data deleted successfully");
        toast.success("post deleted successfully");
        getData();
      });
  };
  const updatePosts = (data) => {
    console.log(data);
    let { id, image, likes, tags, text } = data;
    localStorage.setItem("PostID", id);
    localStorage.setItem("Postimage", image);
    localStorage.setItem("Postlikes", likes);
    localStorage.setItem("PostTags", tags);
    localStorage.setItem("PostText", text);
    history.push("/editPosts");
  };
  const view = (id) => {
    console.log(id);
    localStorage.setItem("commentId", id);
    axios
      .get(`https://dummyapi.io/data/v1/post/${id}`, {
        headers: {
          "app-id": "61ab14be3451350f187c1429",
        },
      })
      .then((res) => {
        console.log(res.data);
        setViewPost(res.data);
        history.push("/viewPostData");
      });
  };

  return (
    <DisplayPosts
      posts={posts}
      deletePost={deletePost}
      updatePosts={updatePosts}
      view={view}
    />
  );
};

export default Posts;
