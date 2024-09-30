import React from "react";

const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Social Bird</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            Welcome to SocialBird, the platform where your ideas, stories, and
            creativity come to life. Whether you're sharing your thoughts,
            posting valuable information, or interacting with the community
            through reactions, our platform lets you express yourself freely.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              onClick={onGetPostClick}
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              Get Post From Server
            </button>
            <button type="button" className="btn btn-outline-light btn-lg px-4">
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
