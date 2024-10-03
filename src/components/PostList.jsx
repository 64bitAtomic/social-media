import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-lis-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";
const PostList = ({ fetching }) => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      <div>
        {fetching && <Loading />}
        {!fetching && postList.length === 0 && (
          <WelcomeMessage onGetPostClick={handleGetPostClick} />
        )}
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default PostList;
