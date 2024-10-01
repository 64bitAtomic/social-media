import React from "react";

const Loading = () => {
  return (
    <>
      <div className="text-center text-white text-info my-4 ">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "20rem", height: "20rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
