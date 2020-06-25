import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import IdleTimer from 'react-idle-timer'
import '../css/app.css';
import 'rodal/lib/rodal.css';
import Home from './Home';
import Projects from './Projects';
import Nav from './Nav';
import Info from './Info';
import Screensaver from './Screensaver';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      path: '',
      ss: false,

      showMoon: true,
      showWater: true,
      showPiss: true,
      index: false
    }

    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    // this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
    this.toggleMoon = this.toggleMoon.bind(this)
    this.toggleWater = this.toggleWater.bind(this)
    this.togglePiss = this.togglePiss.bind(this)
    this.toggleFeed = this.toggleFeed.bind(this)
    this.toggleIndex = this.toggleIndex.bind(this)
  }

  changePath = path => this.setState({path})
  toggleMoon = () => this.setState({ showMoon: !this.state.showMoon })
  toggleWater = () => this.setState({ showWater: !this.state.showWater })
  togglePiss = () => this.setState({ showPiss: !this.state.showPiss })

  toggleIndex = () => {
    this.setState({
      showMoon: false,
      showWater: false,
      showPiss: false
    })
    // wait for fadeout
    setTimeout(() => this.setState({ index: true }), 300)
  }

  toggleFeed = () => {
    this.setState({
      showMoon: true,
      showWater: true,
      showPiss: true
    })
    // wait for fadeout
    setTimeout(() => this.setState({ index: false }), 300)
  }


  componentDidMount(){
    // window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    console.log("scrolled = ", winScroll)
  }

  async _onAction(e) {
    if(this.state.ss){
      console.log('user did something')
      document.getElementById("dvd-mask").classList.add('fade-out-dvd')
      document.getElementById("dvd").classList.add('fade-out-dvd')
      setTimeout(() => {
        this.setState({ ss: false })
      }, 350)
    }
  }
 
  // _onActive(e) {
  //   console.log('user is active')
  // }
 
  async _onIdle(e) {
    console.log('user is idle')
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    await this.setState({ ss: true })
    console.log("scrolled = ", winScroll)
    document.getElementById("dvd-mask").style.marginTop = `${winScroll}px`

  }

  render(){
    
    console.log(this.state)
    return (
      <React.Fragment>
      <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={1000 * 600} />
      <BrowserRouter>
        {this.state.ss && <Screensaver/> }
        <div className="main-section" >
          <Nav path={this.state.path} toggleIndex={this.toggleIndex} toggleFeed={this.toggleFeed} index={this.state.index}/>
          <div className="content-body">
            <Route exact path="/" render={() => 
              <Home 
                {...this.state} 
                changePath={this.changePath}
                toggleMoon={this.toggleMoon}
                toggleWater={this.toggleWater}
                togglePiss={this.togglePiss}
              />} 
            />
            <Route exact path="/projects" render={() => <Projects changePath={this.changePath} />} />
            <Route exact path="/info" render={() => <Info changePath={this.changePath}/> } />
          </div>
          {/* <Route exact path="/dvd" render={() => <Dvd changePath={this.changePath}/> } /> */}
        </div>
      </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;