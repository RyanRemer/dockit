
import ReactDom from "react-dom";
import React from "react";

ReactDOM.render(<h1>Speak friend and enter</h1>, document.getElementById('root'));
=======
class HelloMessage extends React.Component {
    render() {
      return React.createElement(
        "div",
        null,
        "Hello ",
        this.props.name
      );
    }
  }
  
  ReactDOM.render(React.createElement(HelloMessage, { name: "Taylor" }), document.getElementById('hello-example'));
