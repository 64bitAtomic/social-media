import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = (postId) => {
    console.log("delete Post for: " + postId);
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi i am going to mumbai for my vications, hope to enjoy a lot.",
    reaction: 0,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Btech Graduation",
    body: "After 4 years of hard Studies, finally graduated.",
    reaction: 15,
    userId: "user-15",
    tags: ["Graduation", "Unbeliveable"],
  },
];
export default PostListProvider;
