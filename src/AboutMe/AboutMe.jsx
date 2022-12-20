import React from "react";
import classes from './AboutMe.module.css';
import Avatars from "../Image/AboutMe/avatar.jpg";
import Behance from "../Image/AboutMe/icon_behance.png";
import Facebook from "../Image/AboutMe/icon_facebook.png";
import Gmail from "../Image/AboutMe/icon_gmail.png";
import Instagram from "../Image/AboutMe/icon_instagram.png";
import Telegram from "../Image/AboutMe/icon_telegram.png";
import Gradient from '../Image/AboutMe/white_gradient.png';


const AboutMe = () => {
    return(
        <div >
            <div className={classes.imgFlash}>
                <img src={Gradient} className={classes.flash}/>
            </div>
            <div className={classes.container}>
                    <button className={classes.containerClose}>
                        <div className={classes.Close}>
                            Close
                        </div>
                    </button>
                    <div className={classes.containerPhoto}>
                        <img className={classes.images} src={Avatars} alt="MyPhoto" /> 
                    </div>
                    <div className={classes.containerText}>
                    I'm an artist from Kharkiv, Ukraine.<br/>
                    I draw illustrations, concept art, <br/>
                    make posters and branding, <br/>
                    animate and edit videos<br/><br/>

                    I work with programs such as:<br/>
                    Adobe Photoshop, Adobe illustrator,<br/>
                    Adobe After Effects<br/><br/>

                    Education: Multimedia Design,<br/>
                    Bachelor (09/2019 - present)<br/>
                    </div>
                    <div className={classes.containerIcon} href="https://fonts.cdnfonts.com/css/kollektif">
                        <a href='https://www.instagram.com/vladifere/' target="blank">
                            <img className={classes.socialMedia} src={Instagram} alt="Instagram"/>
                        </a>
                        <a href='https://www.facebook.com/vladislav.uliashov' target="blank">
                            <img className={classes.socialMedia} src={Facebook} alt="Facebook"/>
                        </a>
                        <a href='' target="blank">
                            <img className={classes.socialMedia} src={Behance} alt="Behance"/>
                        </a>
                        <a href='https://t.me/vladifere' target="blank">
                            <img className={classes.socialMedia} src={Telegram} alt="Telegram"/>
                        </a>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDrRXgDFvSHnBPshCDtKDhgnhhlzmMqvtnbTTWxHpBwBgmHKMrtmBWWbqFtpCxnbzHTXskg' target="blank">
                            <img className={classes.socialMedia} src={Gmail} alt="Gmail"/>
                        </a>
                      
                       
                    </div>
            </div>
            
            
        </div>
        
    );
}

export default AboutMe;