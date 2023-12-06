import React from "react";
import { Link } from "react-router-dom";
import PageNav from "./PageNav";
const HomePage = () => {
  return (
    <div>
      <PageNav />
      <h3>HomePage</h3>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
};

export default HomePage;
