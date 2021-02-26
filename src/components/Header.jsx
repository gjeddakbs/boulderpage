import React from "react";
import Menu from "./Menu";
import logo from "../bouldering.png";

function Header() {
return <header>
<div className="logo-text">
<img src={logo} alt="logo"/>
<h1>Boulder tracker</h1></div>

<Menu />
</header>

}

export default Header;