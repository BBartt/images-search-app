import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import PageNotFound from "./pages/PageNotFound";

import routes from "./routes";

function App() {
  const { home, photos } = routes;
  return (
    <main className="main">
      <HashRouter>
        <Switch>
          <Route exact path={home} component={HomePage} />
          <Route path={`${photos}/:photoName`} component={PhotosPage} />
          <Route component={PageNotFound} />
        </Switch>
      </HashRouter>
    </main>
  );
}

export default App;
