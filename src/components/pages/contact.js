import React from "react";
import "./style.css";


function Contact() {
  return (
    <div>
        
        <div className="container contactbox">
        <div className="row">
            <div className="col">
                <h1>Contact</h1>
                <hr className=" justify-content-center rounded col-md-8"/>
                <ul>
                    <li>Go to my Github Profile!
                        <img className="logo" src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github logo"/>
                    </li>


                    <a href="https://github.com/JacksonCroy" className="btn btn-dark">Github</a>
                    <br/>
                    <li>Go to my Linkedin Profile!
                        <img className="logoTwo" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" alt="linkedin logo logo" />
                    </li>
                    <a href="https://www.linkedin.com/in/jackson-croy-013aa51a2/" className="btn btn-primary">Linkedin</a>
                    <br/>
                    <li>
                        Phone Number- 480-207-8527
                        <i className="logos material-icons" >phone_in_talk</i>
                    </li>
                    <br/>
                    <li>
                        Email- Jrcroy0607@gmail.com <i className=" logos material-icons" >contact_mail</i>
                    </li>
                </ul>


            </div>

        </div>

    </div>
      
    </div>
  );
}

export default Contact;
