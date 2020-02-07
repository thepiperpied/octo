import React from "react";
import "./App.css";

import ShellBar from "./components/ShellBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.init(props);
  }

  init = props => {
    if (!props.user) {
      return null;
    }
  };

  render() {
    return <ShellBar></ShellBar>;
  }
}

export default App;
