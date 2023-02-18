import "./styles.css";
import React from "react";

class Counter extends React.Component {
  shouldComponentUpdate() {
    console.log("should component update called in Counter");
    //perform some operations and return boolean
    return true;
  }
  // componentDidMount() {
  // i error
  //   console.log("component didmount called in Counter");
  // }
  // componentWillUnmount() {
  // getting error i not found
  //   console.log("component will unmount now");
  //   return true;
  // }

  render() {
    console.log("render was called");
    return <h2>{this.props.i}</h2>;
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { i: 10 };
  }

  componentDidMount() {
    // this.timerId = setInterval(() => {
    //   this.setState({ i: this.state.i + 1 });
    // }, 2000);
    setInterval(() => {
      this.setState({ i: this.state.i + 1 });
    }, 2000);
  }
  componentDidUpdate() {
    //called after each time state updated and component
    // rerenders
    console.log("renders");
  }
  componentWillUnmount() {
    console.log("component will unmount now");
    // if (this.timerId) {
    //   clearInterval(this.timerId);
    // }
    return true;
  }
  shouldComponentUpdate() {
    //some operations and return boolean
    console.log("should component update called in App");
    return true;
  }
  render() {
    return (
      <>
        <Counter i={this.state.i} />
      </>
    );
  }
}
export default App;
//
