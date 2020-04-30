import React from "react";
import { Link } from "react-router-dom";
import { Spring, config } from "react-spring/renderprops";

const styles = {
  topBarHeight: 48,
};

class HomePage extends React.Component {
  render() {
    return (
      <Spring
        config={config.molasses}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {(props) => (
          <div style={props}>
            <div id="WelcomeMessage">
              <h1 id="WelcomeHeader">Welcome to Collectable!</h1>
              <h2 id="WelcomeSubHeader1">
                A new way to store your collections
              </h2>

              <Link to={`/collections`}>
                {<button id="start">START MY COLLECTION!</button>}
              </Link>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default HomePage;
