import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../screens/Home";
import Series from "../screens/Series";
import Movies from "../screens/Movies";


// MARK: Navigation All Pages
// MARK: Container is imported in index.js file
function Container() {
  return (
    <div>
      <TransitionGroup>
        <CSSTransition timeout={{ enter: 300, exit: 300 }}>
          <section className="route-section">
            <Switch >
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/series" component={() => <Series />} />
              <Route exact path="/movies" component={() => <Movies />} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}



export default withRouter(Container);