import React from "react";
import { Link } from "react-router-dom";

// export default () => <p>Hello World!!!</p>;

const x: number = 12345;

function Home() {
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Food Recipes</h1>
          <p className="lead">
            A curated list of recipes of {x} for the best homemade meal and delicacies.
          </p>
          <hr className="my-4" />
          <Link to="/roadmaps" className="btn btn-lg custom-button" role="button">
            View Roadmaps
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
