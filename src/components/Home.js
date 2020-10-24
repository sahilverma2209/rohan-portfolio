import React from 'react';
import enableInlineVideo from 'iphone-inline-video';
import '../css/home.css';
import axios from 'axios';

class Home extends React.Component {

    constructor(){
        super()
    }

    async componentDidMount(){
        setTimeout(() => this.props.changePath(''), 300)

        var videos = document.querySelectorAll('video');
        console.log("video tag = ",videos)

        for(var i = 0; i < videos.length; i++){
            enableInlineVideo(videos[i]);
        }

    }

    render(){
        console.log(this.props)
        const isMobile = window.matchMedia("(max-width: 575px)").matches;
        console.log(isMobile)
        return (
            <div className="main-container">
                {/* MOONTOWER */}
                <div className={`project-section moon ${this.props.showMoon ? "" : "add-bottom-margin"}`} >

                    <div onClick={this.props.toggleMoon}>
                        <div className="work-section-heading">MOONTOWER</div>
                        <div className="work-section-content">VISUAL IDENTITY, 2019 </div>
                    </div>

                    {this.props.showMoon ? 
                        <React.Fragment>
                            <div className="work-section-content">w/ BILL CHIEN, RUOLIN FENG, BRANDON JOSEPH & FAY QIU </div>
                            
                            <video className="cover-video" autoPlay loop playsinline>
                                <source src="assets/moon/RR-MNTR-01.mp4" type="video/mp4" />
                            </video>

                            <div className="moon-sec-1">
                                <img alt="img" className="moon-img-1" src="assets/moon/RR-MNTR-02.jpg" />
                            </div>
                            
                            <div className="moon-sec-2">
                                <img alt="img" className="moon-img-2" src="assets/moon/RR-MNTR-03.jpg" />
                            </div>

                            <div className="moon-sec-3">
                                <div className="moon-sec-3-img-3"><img alt="img" className="moon-img-3" src="assets/moon/RR-MNTR-04.jpg" /></div>
                                <div className="moon-sec-3-img-4"><img alt="img" className="moon-img-4" src="assets/moon/RR-MNTR-05.jpg" /></div>
                            </div>
                            
                            <div className="moon-sec-4">
                                <div className="moon-sec-4-img-5"><img alt="img" className="moon-img-6" src="assets/moon/RR-MNTR-07.gif" /></div>
                                <div className="moon-sec-4-img-6"><img alt="img" className="moon-img-5" src="assets/moon/RR-MNTR-06.jpg" /></div>
                            </div>

                            <video className="cover-video" autoPlay loop playsinline>
                                <source src="assets/moon/RR-MNTR-08.mp4" type="video/mp4" />
                            </video>

                            <div className="moon-sec-5">
                                <img alt="img" className="moon-img-7" src="assets/moon/RR-MNTR-09.jpg" />
                            </div>

                            <div className="moon-sec-6">
                                <div className="moon-sec-6-img-8"><img alt="img" className="moon-img-8" src="assets/moon/RR-MNTR-10.jpg" /></div>
                                <div className="moon-sec-6-img-9"><img alt="img" className="moon-img-9" src="assets/moon/RR-MNTR-11.jpg" /></div>
                            </div>
                        </React.Fragment>
                        : null

                    }

                </div>

                {/* WATER */}
                <div className={`project-section water ${this.props.showWater ? "" : "add-bottom-margin"}`}>

                    <div onClick={this.props.toggleWater}>
                        <div className="work-section-heading">WATERING A FLOWER - HARUOMI HOSONO</div>
                        <div className="work-section-content">ALBUM PACKAGING, 2019</div>
                    </div>  

                    {this.props.showWater ? 
                        <React.Fragment>
                            {!isMobile ? 
                                <div className="water-sec-5">
                                    <div className="water-sec-5-img-5"><img alt="img" className="water-img-5" src="assets/water/RR-WaF-01.jpg" /></div>
                                    <div className="water-sec-5-img-6"><img alt="img" className="water-img-6" src="assets/water/RR-WaF-02.jpg" /></div>
                                </div> :
                                <div className="water-sec-5">
                                    <img alt="img" className="water-img-5" src="assets/water/RR-WaF-01.jpg" />
                                    <img alt="img" className="water-img-6" src="assets/water/RR-WaF-02.jpg" />
                                </div>
                            }
                            <div className="water-sec-3">
                                <img alt="img" className="water-img-3" src="assets/water/RR-WaF-03.jpg" />
                            </div>
                            
                            <div className="water-sec-4">
                                <img alt="img" className="water-img-4" src="assets/water/RR-WaF-04.jpg" />
                            </div>
                            
                            <div className="water-sec-5">
                                <div className="water-sec-5-img-5"><img alt="img" className="water-img-5" src="assets/water/RR-WaF-05.jpg" /></div>
                                <div className="water-sec-5-img-6"><img alt="img" className="water-img-6" src="assets/water/RR-WaF-06.jpg" /></div>
                            </div>

                            <div className="water-sec-3">
                                <img alt="img" className="water-img-7" src="assets/water/RR-WaF-07.jpg" />
                            </div>
                        </React.Fragment> : null 
                    }

                </div>

                {/* PISSED */}
                <div className={`project-section pissed ${this.props.showPiss ? "" : "add-bottom-margin"}`}>

                    <div onClick={this.props.togglePiss}>
                        <div className="work-section-heading">PISSED - LOREM IPSUM</div>
                        <div className="work-section-content">ALBUM PACKAGING, 2019</div>
                    </div>    

                    {this.props.showPiss ? 
                        <React.Fragment>
                            <video className="cover-video" poster="assets/pissed/PISSED-01.png" autoPlay loop>
                                <source src="assets/pissed/PISSED-01.mp4" type="video/mp4" />
                            </video>

                            <div className="pissed-sec-3">
                                <div className="sec-3-img-1">
                                    <img alt="img" className="pissed-img" src="assets/pissed/RR-PIS-04.jpg"/>
                                </div>
                                <div className="sec-3-img-2">
                                    <img alt="img" className="pissed-img" src="assets/pissed/RR-PIS-05.jpg"/>
                                </div>
                            </div>
                            <div className="pissed-sec-3">
                                <div className="sec-3-img-1">
                                    <img alt="img" className="pissed-img" src="assets/pissed/RR-PIS-06.jpg"/>
                                </div>
                                <div className="sec-3-img-2">
                                    <img alt="img" className="pissed-img" src="assets/pissed/RR-PIS-07.jpg"/>
                                </div>
                            </div>
                        </React.Fragment> : null 
                    }
                </div>
            </div>
        );
    }
}

export default Home;
