import React from "react";
import blackGif from "../gifblack.gif";

function AppSection()  {
return <section className="appsection">
<div className="gifsection">
    <img src={blackGif} alt="gif of app"></img>
    <h3>Register climb</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate neque nunc, vel porta felis porta id. Aliquam sed tincidunt.</p>
    </div>
    <div className="gifsection">
    <img src={blackGif} alt="gif of app"></img>
    <h3>Stats</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate neque nunc, vel porta felis porta id. Aliquam sed tincidunt.</p>
    </div><div className="gifsection">
    <img src={blackGif} alt="gif of app"></img>
    <h3>Graphs</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate neque nunc, vel porta felis porta id. Aliquam sed tincidunt.</p>
    </div>
    

</section>

}

export default AppSection;