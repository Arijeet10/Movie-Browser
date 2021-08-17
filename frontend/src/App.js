import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import HomePage from "./components/homepage";
import Movie from "./components/movieDetails";


function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/movie/:id" component={Movie} />
            <Route path="/"><HomePage /></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
