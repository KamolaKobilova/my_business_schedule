import React from 'react'
import {MainItem} from './StylesForSignUp';
import logo from '../../assets/BookingPage/zoho-logo-web.svg'

export const NavbarSignUp = () => {
  return (
    <MainItem>
      <div className="flex" style={{height: "70px"}}>
        <img src={logo} alt="" style={{width: "160px", height:"44px", margin:"10px 12px"}}/>
        <div className="left_items" style={{display: "flex", flexDirection: "row", justifyContent: "end", margin: "-40px 30px"}}>
            <p style={{marginRight: "15px"}}>Have a Zoho Account?</p>
            <h4><a  style={{textDecoration: "none", color: "#F0483E", fontFamily: "sans-serif"}} href="/">Sign In</a></h4>
        </div>
      </div>

    </MainItem>
  )
}
