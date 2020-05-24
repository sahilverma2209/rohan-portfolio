import React from 'react';
import '../css/info.css';

class Info extends React.Component {

    componentDidMount(){
        
        this.props.changePath('info')
        setTimeout(() => {
            document.getElementById("hide-r").classList.add("show-r")
        }, 500)
        // window.addEventListener('scroll', this.handleScroll);
    }

    render(){
        return (
            <div className="info-container">
                <div className="info-content" id="moveup">

                    <div className="section section-0  wow animate__animated animate__fadeIn" data-wow-duration="1s">
                        <span id="hide-r" class="hide-r-class">R</span>ohan Rege is a designer from Mumbai, now in New York City. He is graduate student at the School of Visual Arts.
                    </div>

                    <div className="section section-1  wow animate__animated animate__fadeIn" data-wow-duration="1s" data-wow-delay="150ms">
                        <br/><br/>
                        Education
                        <div className="edu" >
                            <div className="exp">
                                MFA Design, 2021 <span className="expected">(expected)</span><br/>
                                School of Visual Arts, US 
                            </div>
                        <div className="half-br" />
                        BFA Applied Art, 2017<br/>
                        Mumbai University, IN
                        </div>
                    </div>

                    <div className="section section-2 wow animate__animated animate__fadeIn" data-wow-duration="1s" data-wow-delay="150ms">
                        <br/><br/>
                        Recognition
                        <div className="edu" >
                        Gold Cube, Art Directors Club New York, 2020
                        <div className="half-br" />
                        Type Directors Club New York, 2020
                        <div className="half-br" />
                        Bronze Abby, The Advertising Club India, 2019
                        <div className="half-br" />
                        Communication Arts Guild India, 2017
                        </div>
                    </div>

                    <div className="section section-3 wow animate__animated animate__fadeIn" data-wow-duration="1s" data-wow-delay="150ms">
                        <br/><br/>
                        Contact
                        <div className="edu" >
                        <span style={{  textTransform: "lowercase"}} >rohanxrege@gmail.com</span>
                        </div>
                    </div>

                    <div className="section section-4 wow animate__animated animate__fadeIn" data-wow-duration="1s" data-wow-delay="150ms">
                    <br/><br/>
                        Ask for full portfolio/résumé
                    </div>


                    <div className="section section-5 wow animate__animated animate__fadeIn" data-wow-duration="1s" data-wow-delay="150ms">
                    <br/><br/>
                        Rohan Rege © 2020
                    </div>
                    
                    <div className="section section-6 wow animate__animated animate__fadeIn" data-wow-duration="1s" data-wow-delay="150ms">
                        Site developed by Sahil Verma
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Info;
