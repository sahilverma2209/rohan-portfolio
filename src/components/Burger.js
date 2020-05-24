import React from 'react';
import { Link } from "react-router-dom";
import '../css/home.css';

class Burger extends React.Component {

    constructor(){
        super()
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClickOutside, false)
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside, false)
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

    render(){
        console.log(this.node)
        return (
            <div className="ham-drop wow" id="nav-drop" ref={node => this.node = node}>
                <Link to="/" className="drop-link wow animate__animated animate__fadeIn" data-wow-duration="800ms" data-wow-delay="0" onClick={this.props.closeDropdown}>HOME</Link>
                <Link to="/work" className="drop-link wow animate__animated animate__fadeIn" data-wow-duration="800ms" data-wow-delay="50ms" onClick={this.props.closeDropdown}>WORK</Link>
                <Link to="/info" className="drop-link wow animate__animated animate__fadeIn" data-wow-duration="800ms" data-wow-delay="150ms" onClick={this.props.closeDropdown}>INFO</Link>
                <a href="mailto:rohanxrege@gmail.com"  target="_blank" rel="nofollow noopener noreferrer" className="drop-link wow animate__animated animate__fadeIn" data-wow-duration="800ms" data-wow-delay="300ms">EMAIL</a>
            </div>
        )
    }
}

export default Burger;


