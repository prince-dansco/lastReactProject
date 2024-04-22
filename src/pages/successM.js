import React from "react";
import { Link } from "react-router-dom";

const SuccessM = () => {
  return (
    <div>
      <div className="success move-top-to-center">
        <h1>Deleted successfuly</h1>
        <h2>Thank you</h2>
        <Link to="/">go back to home</Link>
      </div>
    </div>
  );
};

export default SuccessM;
