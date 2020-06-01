import React from 'react';
import '../css/nav.css';
import Burger from './Burger';

class Nav extends React.Component {

    constructor(){
        super()
        this.state = {
            dropdownOpen: false
        }
    }

    openDropdown = () => this.setState({ dropdownOpen: true })
    closeDropdown = () => this.setState({ dropdownOpen: false })

    componentWillUpdate(nextProps, _){
        console.log(nextProps.path,  window.location.pathname)
        if(nextProps.path === "info" && window.location.pathname === "/info"){
            setTimeout(() => {
                document.getElementById("R-hide").classList.add("fade-out-nav-left")
            }, 500)
        } else if(nextProps.path === "") {
            document.getElementById("R-hide").classList.remove("fade-out-nav-left")
        }
    }

    render(){
        return (
            <div className="nav-container">
                <div id="R-hide" className="nav-left" onClick={this.closeDropdown}>R<span className="fullname">OHAN REGE</span></div>

                <div className="nav-right">
                {!this.state.dropdownOpen ? 
                    <div className="nav-right-text" onClick={this.openDropdown}><span className="hamb">HAMBURGE</span>R</div> :
                    <Burger closeDropdown={this.closeDropdown}/>
                }   
                </div>

                
            </div>   
        )
    }
}

export default Nav;
