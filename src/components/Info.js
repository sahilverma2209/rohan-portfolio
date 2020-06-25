import React from 'react';
import '../css/info.css';

class Info extends React.Component {

    componentDidMount(){
        
        // setTimeout(() => this.props.changePath('info'), 0)
        // setTimeout(() => {
        //     document.getElementById("hide-r").classList.add("show-r")
        // }, 0)
        document.getElementById("hide-r").classList.add("show-r")
        this.props.changePath('info')
        // window.addEventListener('scroll', this.handleScroll);
    }

    render(){
        
        return (
            <div className="info-container">
                <div className="info-content" id="moveup">

                    <div className="section section-0">
                        <span id="hide-r" className="hide-r-class">R</span>OHAN REGE IS A DESIGNER FROM MUMBAI, NOW IN NEW YORK CITY. HE IS A GRADUATE STUDENT AT THE SCHOOL OF VISUAL ARTS.
                    </div>

                    <div className="section section-1">
                        HE’S ALSO A RETIRED INDIE MUSICIAN, BUT OCCASIONALLY WHIPS OUT (NOT QUITE) BANGERS FOR FRIENDS.
                    </div>
                    
                    <div className="section section-2">
                        THIS IS PRETTY MUCH HIS ONLY ONLINE PRESENCE, AS HE DELETED HIS SOCIAL MEDIA ACCOUNTS BACK IN 2017 TO SEE IF HE CAN LIVE WITHOUT IT. SO FAR, SO GOOD.
                    </div>
                    
                    <div className="section section-3">
                    YES, HE IS A REAL PERSON.
                    </div>


                    <div className="section section-4">
                        <div className="section-heading">Education</div>
                        <div className="section-content">
                            <div className="edu-masters">
                                <div className="edu-uni">MFA Design, 2021 <span className="expected">(expected)</span></div>
                                <div className="edu-loc">School of Visual Arts, US</div>
                            </div>
                            <div className="edu-bach">
                                <div className="edu-uni">BFA Applied Art, 2017</div>
                                <div className="edu-uni">RACHANA SANSAD,</div> 
                                <div className="edu-uni">Mumbai University, IN</div> 
                            </div>
                        </div>
                    </div>

                    <div className="section section-5">
                    <div className="section-heading">Recognition</div>
                        <div className="section-content" >
                            <div className="recog recog-1">GOLD CUBE, ART DIRECTORS CLUB NEW YORK, 2020</div>
                            <div className="recog">TYPE DIRECTORS CLUB NEW YORK, 2020</div>
                            <div className="recog">ROLLING STONE INDIA, 2019</div>
                            <div className="recog">BRONZE ABBY, THE ADVERTISING CLUB INDIA, 2019</div>
                            <div className="recog">COMMUNICATION ARTS GUILD INDIA, 2017</div>
                        </div>
                    </div>

                    <div className="section section-6">
                        <div className="section-heading">Contact</div>
                        <div className="section-content">rohanxrege@gmail.com</div>
                    </div>

                    <div className="section section-7">
                        <div className="section-heading">WRITE TO HIM FOR WORK INQUIRIES, FULL PORTFOLIO AND RESUME.</div>
                    </div>
                    
                    <div className="section section-9">
                        <div className="section-heading">Site developed by Sahil Verma</div>
                    </div>

                    <div className="section section-8">
                        <div className="section-heading">Rohan Rege © 2020</div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Info;
