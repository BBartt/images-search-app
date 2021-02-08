import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <main className="main">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/photos/:photoName" component={PhotosPage} />
          <Route component={PageNotFound} />
        </Switch>
      </HashRouter>
    </main>
  );
}

export default App;
