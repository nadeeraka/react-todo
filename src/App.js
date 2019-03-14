import React, { Component } from "react";
import Title from "./components/title";
import Footer from "./components/footer";
import Logic from "./components/Logic";
import { Provider } from "./api/api";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <>
          <Title />
          <div className="hold">
            <Logic />
          </div>
          <Footer />
        </>
      </Provider>
    );
  }
}

export default App;
