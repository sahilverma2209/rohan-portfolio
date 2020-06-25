import React from 'react';
import { Link } from "react-router-dom";
import '../css/burger.css';

class Burger extends React.Component {

    constructor(){
        super()
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.showIndex = this.showIndex.bind(this)
        this.showFeed = this.showFeed.bind(this)

        this.state = {
            isBigScreen: window.matchMedia("(min-width: 1200px)").matches
        }
    }

    componentWillMount(){
        // document.addEventListener('mousedown', this.handleClickOutside, false)
        // if(!this.state.isBigScreen) document.getElementById('nav-cont').classList.add("removeInvertNav")
    }
    
    componentWillUnmount(){
        // if(!this.state.isBigScreen) document.getElementById('nav-cont').classList.remove("removeInvertNav")
        // document.getElementById('nav-drop').style.animation = "fadeOut 0.3s"
        // document.removeEventListener('mousedown', this.handleClickOutside, false)
    }

    handleClickOutside(e){
        // if(this.node){
            console.log('here = ', this.node)
            if (!this.node.contains(e.target)) {
                e.stopPropagation()
                this.props.closeDropdown()
            }
        // }
    }

    showIndex(){
        this.props.toggleIndex()
        this.props.closeDropdown()
    }

    showFeed(){
        this.props.toggleFeed()
        this.props.closeDropdown()
    }

    render(){
        const path = window.location.pathname
        console.log("burger path = ", this.props.path)
        const isBigScreen = window.matchMedia("(min-width: 1200px)").matches
        return (
            <div className="ham-drop" id="nav-drop" ref={node => this.node = node}>
                {isBigScreen && <a className="drop-link dl-0" onClick={this.props.closeDropdown}>CLOSE</a>}
                {this.props.path === "info" ?  
                    <React.Fragment>
                        <Link to="/" className="drop-link dl-1"  onClick={this.showFeed}>FEED</Link>
                        <Link to="/" className="drop-link dl-2"  onClick={this.showIndex}>INDEX</Link>
                    </React.Fragment>
                    : 
                    <Link to="/" className="drop-link dl-1"  onClick={this.props.index ? this.showFeed : this.showIndex }>{!this.props.index ? "INDEX" : "FEED"}</Link> 
                }
                {!(this.props.path === "info") && <Link to="/info" className="drop-link dl-2" onClick={this.props.closeDropdown}>INFO</Link>}
                <a className="drop-link dl-3" href="mailto:rohanxrege@gmail.com"  target="_blank" rel="nofollow noopener noreferrer" >EMAIL</a>
            </div>
        )
    }
}

export default Burger;


