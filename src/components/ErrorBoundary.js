import { render } from "@testing-library/react";
import React, {Component} from "react";

class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }


  componentDidCatch(error,info) {
    this.setState({hasError: true})

  }
  render() {
    if (this.state.hasError){
      return <h1 className="tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5">Error!!</h1>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;