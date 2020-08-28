import React from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "constants/routes";

const Error404 = () => (
  <div>
    <Link to={LOGIN}>Go Home</Link>
  </div>
);

export default Error404;