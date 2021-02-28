import React from "react";
import registerGif from "../registerframed.gif";
import graphsGif from "../graphsframed.gif";
import logGif from "../logframed.gif";

function AppSection()  {
return <section className="appsection" id="features">
<h2 className="sectionheader">Features</h2>
<hr/>

<div className="gifsection">
<div className="featuregif">
<h3>Register climb</h3>
    <p>For each climbed boulder, register the grade.</p>
    <img src={registerGif} alt="gif of app"></img>
    
    </div>
    <div className="featuregif">
    <h3>Stats & Graphs</h3>
    <p>Keep track of your progress with easy to read statistics and graphs.</p>
    
    <img src={graphsGif} alt="gif of app"></img>
    
    </div>
    <div className="featuregif">
    <h3>Training log</h3>
    <p>Look back at previous climbs in your training log </p>
    <img src={logGif} alt="gif of app"></img>
    
    </div>
    </div>

</section>

}

export default AppSection;