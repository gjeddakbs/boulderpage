import React from "react";
import registerGif from "../register.gif";
import graphsGif from "../graphs.gif";
import logGif from "../log.gif";

function AppSection()  {
return <section className="appsection" id="features">
<h2 className="sectionheader">Features</h2>
<br/>
<div className="gifsection"></div>
<div className="featuregif">
    <img src={registerGif} alt="gif of app"></img>
    <h3>Register climb</h3>
    <p>For each climbed boulder, register the grade climbed.</p>
    </div>
    <div className="featuregif">
    <img src={graphsGif} alt="gif of app"></img>
    <h3>Stats & Graphs</h3>
    <p>Keep track of your progress with extensive statistics and graphs.</p>
    </div>
    <div className="featuregif">
    <img src={logGif} alt="gif of app"></img>
    <h3>Training log</h3>
    <p>Each climb is visible in your training log </p>
    </div>
    

</section>

}

export default AppSection;