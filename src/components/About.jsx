import React from "react";
import lightmode from "../lightmode.png"

function About() {
return <section className="about" id="about">
<h2 className="sectionheader">About</h2>
<hr/>
<div className="content">


<div className="pitches">
    <p>The app to get for boulderers who love to keep track of their progress. </p>
    <p>Free of charge, and zero advertisements.</p>
    <p>All your data is stored securely at a renowned database provider.</p>
    <p>You can choose between dark or light theme!</p>
</div>

</div>
<img src={lightmode} alt="light mode"></img>
    
</section>

}

export default About;