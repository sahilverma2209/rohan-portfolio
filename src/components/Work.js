import React from 'react';
import '../css/work.css';

class Work extends React.Component {
    async componentDidMount(){
        await this.props.changePath('')
    }

    render(){
        return (
            <div className="work-container">
                <video className="cover-video" poster="assets/pissed/PISSED-01.png" autoPlay loop>
                    <source src="assets/pissed/PISSED-01.mp4" type="video/mp4" />
                </video>

                <div className="work-sec-2">
                    <video className="sec-2-video-1" autoPlay loop>
                        <source src="assets/pissed/PISSED-02.mp4" type="video/mp4" />
                    </video>
                    <video className="sec-2-video-2" autoPlay loop>
                        <source src="assets/pissed/PISSED-02.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="work-sec-3">
                    <div className="sec-3-img-1">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-04.png"/>
                    </div>
                    <div className="sec-3-img-2">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-05.png"/>
                    </div>
                </div>
                <div className="work-sec-3">
                    <div className="sec-3-img-1">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-06.png"/>
                    </div>
                    <div className="sec-3-img-2">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-07.png"/>
                    </div>
                </div>
                <div className="work-sec-3">
                    <div className="sec-3-img-1">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-08.png"/>
                    </div>
                    <div className="sec-3-img-2">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-09.png"/>
                    </div>
                </div>
                <div className="work-sec-3">
                    <div className="sec-3-img-1">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-10.png"/>
                    </div>
                    <div className="sec-3-img-2">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-11.png"/>
                    </div>
                </div>
                <div className="work-sec-3">
                    <div className="sec-3-img-1">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-12.png"/>
                    </div>
                    <div className="sec-3-img-2">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-13.png"/>
                    </div>
                </div>
                <div className="work-sec-3">
                    <div className="sec-3-img-1">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-14.png"/>
                    </div>
                    <div className="sec-3-img-2">
                        <img alt="img" className="pissed-img" src="assets/pissed/PISSED-15.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
