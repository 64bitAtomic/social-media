import React from "react";
import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  return (
    <Form method="POST" className="text-white create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id
        </label>
        <input
          name="userId"
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title " className="form-label">
          Post Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          placeholder="how are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          name="body"
          rows={4}
          type="text"
          className="form-control"
          id="body"
          placeholder="tell us more about it "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Reactions
        </label>
        <input
          name="reaction"
          type="text"
          className="form-control"
          id="reaction"
          placeholder="how people many reacted to this post. "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Enter Your Tags
        </label>
        <input
          name="tags"
          type="text"
          className="form-control"
          id="tag"
          placeholder="how are you feeling today..."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export const CreatePostSubmit = async (data) => {
  const fromData = await data.request.formData();
  const postData = Object.fromEntries(fromData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
};

export default CreatePost;
