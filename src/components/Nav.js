import React from 'react';
import { Link } from "react-router-dom";
import '../css/nav.css';
import Burger from './Burger';

class Nav extends React.Component {

    constructor(){
        super()
        this.state = {
            dropdownOpen: false,
            isBigScreen: window.matchMedia("(min-width: 1200px)").matches
        }

        this.closeDropdown = this.closeDropdown.bind(this)
        this.openDropdown = this.openDropdown.bind(this)
        // this.toggleDropdown = this.toggleDropdown.bind(this)
        this.sizeChange = this.sizeChange.bind(this)
    }

    componentWillMount(){
        window.addEventListener('resize', this.sizeChange)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.sizeChange)
    }

    // toggleDropdown() {
    //     setTimeout(() => {
    //         this.setState({ dropdownOpen: !this.state.dropdownOpen })
    //     }, 300)
    // }

    openDropdown(){
        if(!window.matchMedia("(min-width: 1200px)").matches){
            console.log("here hb")
            document.getElementById("hb").classList.add('is-active')
        }
        this.setState({ dropdownOpen: true })
    }

    closeDropdown(){
        // document.getElementById('nav-cont').classList.remove("removeInvertNav")
        if(!window.matchMedia("(min-width: 1200px)").matches){
            console.log("here hb")
            document.getElementById("hb").classList.remove('is-active')
        }
        // this.setState({ dropdownOpen: false })
        document.getElementById('nav-drop').style.animation = "fadeOut 0.3s"
        setTimeout(() => {
            this.setState({ dropdownOpen: false})
        }, 300)
    }

    componentWillUpdate(nextProps, _){
        console.log(nextProps.path,  window.location.pathname)
        if(nextProps.path === "info" && window.location.pathname === "/info"){
            setTimeout(() => {
                document.getElementById("R-hide").classList.add("fade-out-nav-left")
            }, 0)
        } else if(nextProps.path === "") {
            document.getElementById("R-hide").classList.remove("fade-out-nav-left")
        }
    }

    sizeChange(){
        this.setState({ isBigScreen: window.matchMedia("(min-width: 1200px)").matches })
    }

    render(){
        const isBigScreen = this.state.isBigScreen
        console.log(isBigScreen)
        return (
            <div id="nav-cont" className="nav-container" onresize={this.sizeChange}>
                <div id="R-hide" className="nav-left">R<span className="fullname">OHAN REGE</span></div> 
                

                <div className="nav-right">
                {isBigScreen ?
                    ( !this.state.dropdownOpen ? 
                        <div className="nav-right-text" onClick={this.openDropdown}><span className="hamb">HAMBURGE</span>R</div> :
                        <Burger closeDropdown={this.closeDropdown} {...this.props} />
                    ) 
                    : // mobile
                    <React.Fragment>
                        <button id="hb" class="hamburger hamburger--spring" type="button" onClick={this.state.dropdownOpen ? this.closeDropdown : this.openDropdown}>
                                <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                                </span>
                        </button>
                        {/* <div className="cover-border"></div> */}
                        {this.state.dropdownOpen && <Burger closeDropdown={this.closeDropdown} {...this.props} /> }
                    </React.Fragment>
                }

                </div>

                
            </div>   
        )
    }
}

export default Nav;