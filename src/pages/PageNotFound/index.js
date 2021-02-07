import React from "react";
import { Route, Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-not-found">
      404 - page not found
      <Route>
        <Link to="/">Back to home page</Link>
      </Route>
    </div>
  );
}

export default PageNotFound;
