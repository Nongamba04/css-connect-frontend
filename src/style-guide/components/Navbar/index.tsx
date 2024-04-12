import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Styles from "./styles.module.scss"
import ToggleTheme from "../../components/toggle-theme";

const links =[
    {
        name:"Home",
        link:"/home"
    },
    {
        name:"Feed",
        link:"/feed"
    },
    {
        name:"Contact Us",
        link:"/contact_us"
    },
];

const Navbar =()=>{
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isActive,setActive] = useState(false);
    return(
    <div className={Styles.navbarContainer}>
        <nav className="navbar">
            <Link href="/home"><img className={Styles.logo} src="logo_compressed.png" alt="LOGO"/></Link>
          <ul className={isActive? Styles.activeNavItems :Styles.inactiveNavItems}>{
            links.map((item,i)=>(
                    <li key={i}><Link href={item.link}>{item.name}</Link></li>
            ))
          }</ul> 
           
        
        <ToggleTheme/>

        <div onClick={() => setActive(!isActive)}>
            <div className={isActive ? Styles.activeHam : Styles.ham_Container} />
        </div>

          
        </nav>
    </div>

    );
};

export default Navbar;
