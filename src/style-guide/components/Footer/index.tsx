import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Styles from './styles.module.scss';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const linksCSS = [
  {
    name:"Official Css website",
    link:"/css"
  },
  {
    name:"About Us",
    link:"/about_us"
  },
  {
    name:"Terms and Services",
    link:"/terms"
  },
  {
    name:"Privacy Policy",
    link:"/policy"
  },
  {
    name:"Community guidelines",
    link:"/guidelines"
  },
];
const links2 = [
  {
    name:"Help Centre",
    link:"/help"
  },
  {
    name:"Feedback",
    link:"/feedback"
  },
  {
    name:"Download Our App",
    link:"/app"
  },
];


const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.header}>
        <h1>Css Connect</h1>
      </div>

      <div className={Styles.main}>
        <div className={Styles.main_row}>
          <div className={Styles.main_col}>
            <h4>CSS</h4>
            
            {
              linksCSS.map((item,i)=>(
                <Link href={item.link} key={i}>{item.name}</Link>
              ))
            }
           
            
          </div>

          <div className={Styles.main_col}>
            <h4>Connect With Us</h4>
            {
              links2.map((item,i)=>(
                <Link href={item.link} key={i}>{item.name}</Link>
              ))
            }
          </div>
        </div>
        <div className={Styles.main_row}>
          <div className={Styles.main_col}>
            <h1>Follow us</h1>
            <div className={Styles.icons}>
              <Link href="#">
                <AiFillFacebook size={30} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={30} />
              </Link>
              <Link href="#">
                <AiFillLinkedin size={30} />
              </Link>
            </div>
          </div>

          <div className={Styles.main_col}>
            <img src='tech.jpeg'/>
          </div>
        </div>
          
        </div>
      </div>
  );
};

export default Footer;
