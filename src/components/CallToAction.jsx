import React from "react";
import googlelogo from "../google-play-badge.png";
import applelogo from "../apple.svg";


function CallToAction() {
return <section className="calltoaction">
<div className="ctabox">
<p>Take your climbing to the next peak. Start collecting your stats today!</p>
<div className="buttons">
<button className="googlebutton"><img src={googlelogo} alt="Google button"/></button>
<button className="applebutton"><img src={applelogo} alt="Apple button" /></button>
</div>
</div>
</section>
}

export default CallToAction;