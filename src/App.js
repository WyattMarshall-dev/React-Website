import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import Project from './components/Project';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); 
    this.handleSelection = this.handleSelection.bind(this); 
  }

  state = {
    terms: 'projects',
    selection: ''
   }

   handleSelection(value){
    this.setState({terms: value});
    //console.log("App - Call", value);
  }

   handleChange(value){
    this.setState({terms: value});
  }


  render() { 
    return (
      <Router >
        <div className="App">

          <Navbar onValueChange={this.handleChange}/>
          {/* <Home terms={this.state.terms}/> */}

          <Switch >
          <Route 
            path="/" 
            exact 
            render={() => <Home terms={this.state.terms} value={this.state.terms}/> } 
          />

          <Route 
            path="/resume" 
            exact 
            render={() => <Resume /> } 
          />
          
          <Route 
            path="/contact" 
            exact 
            render={() => <Resume /> } 
          />

          <Route 
            path="/Project/:id" 
            exact 
            component={Project}
          />
          </Switch>

        </div>
      </Router>
    );
  }
}
 
export default App;

