import React from "react";
import googlelogo from "../google-play-badge.png";
import applelogo from "../apple.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

function CallToAction() {
return <section className="calltoaction">
<div className="ctabox">
<p>Take your climbing to the next peak. Start collecting your stats today!</p>
<div className="buttons">
<button className="googlebutton"><img src={googlelogo}/></button>
<button className="applebutton"><img src={applelogo} /></button>
</div>
</div>
</section>
}

export default CallToAction;