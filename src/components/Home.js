import React from 'react';
import '../css/home.css';

class Home extends React.Component {
    async componentDidMount(){
        await this.props.changePath('')
    }

    render(){
        return (
            <div className="main-container">
                
            </div>
        );
    }
}

export default Home;
