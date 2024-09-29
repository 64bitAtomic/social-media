import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-lis-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card text-white bg-dark my-3" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((t) => (
          <span key={t} className="badge text-bg-primary mx-1">
            {t}
          </span>
        ))}
      </div>
      <div className="alert alert-success m-2 mb-3" role="alert">
        This post has been reacted by {post.reaction} people.
      </div>
    </div>
  );
};

export default Post;
