import { Component } from "react";
import NavBar from "../navBar";

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      
      console.log('logging error',error,errorInfo);
    }
  
    render() {
      if (this.state.hasError) {


        
        return (
          <div>
        <NavBar/>
        <h1 className="errorBoundary">Something went wrong.try again later</h1>
        </div>)
        
      }
  
      return this.props.children; 
    }
  }