import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import '../css/app.css';
import Home from './Home';
import Projects from './Projects';
import Nav from './Nav';
import Info from './Info';
import Work from './Work';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      path: ''
    }
  }

  changePath = path => this.setState({path})

  componentDidMount(){
    // window.addEventListener('scroll', this.handleScroll);
  }

  // componentWillUpdate(_, nextState){
  //   console.log(nextState.path)
  //   if(nextState.path === "info"){
  //     var moveup = document.getElementById("moveup")
  //     console.log("mu = ", moveup)
  //     window.scroll({
  //       top: 60,
  //       behavior: 'smooth',
  //     })
  //   }
  // }

  // handleScroll(){
  //   const isBigScreen = true //window.matchMedia(BIG_SCREEN).matches
  //   if(isBigScreen){
  //       const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  //       console.log("scrolled = ", winScroll)

  //       if(winScroll > 2){
  //           var R = document.getElementById("hide-r")
  //           R.classList.add("bye-r")
  //       }
  //   }
  // }

  render(){
    console.log(this.state)
    return (
      <BrowserRouter>
        <div className="main-section" >
          <Nav path={this.state.path} />
          <Route exact path="/" render={() => <Home changePath={this.changePath}/>} />
          <Route exact path="/projects" render={() => <Projects changePath={this.changePath} />} />
          <Route exact path="/info" render={() => <Info changePath={this.changePath}/> } />
          <Route exact path="/work" render={() => <Work changePath={this.changePath}/> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;