import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-lis-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const postList = useLoaderData();

  const handleGetPostClick = () => {
    return postList;
  };

  return (
    <>
      <div>
        {postList.length === 0 && (
          <WelcomeMessage onGetPostClick={handleGetPostClick} />
        )}
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export const postLoader = async () => {
  return await fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data.posts);
};

export default PostList;
