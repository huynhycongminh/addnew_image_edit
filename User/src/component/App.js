import "../css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import { Component } from "react";
import Chatbox from "./Chatbox/Chatbox";


import Landing from "./Landing/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Landing></Landing>
          <Footer />
          <Chatbox />
        </Router>
      </div>
    );
  }
}

export default App;
