// import React from "react";
import Post from "./Post";
import styles from "./Posts.module.css";
import { useSelector } from "react-redux";
const Posts = () => {
  const userpost = useSelector((state) => {
    return state.userPost;
  });
  return (
    <div className={styles.posts}>
      {userpost.map((post, index) => (
        <Post post={post} postIndex={index} />
      ))}
    </div>
  );
};

export default Posts;
