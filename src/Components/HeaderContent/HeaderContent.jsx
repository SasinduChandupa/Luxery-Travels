import React from 'react'
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import MenuLink from '../MenuLink/MenuLink'
import ltImage from '../../assets/LT.png';


function HeaderContent() {
    return (
        <div id="navcontent">
            
            <a href="#"><img src={ltImage} alt="LT Logo" /></a>
            <div>
                <MenuLink linkName="AboutUs" url="AboutUs"/>
                <MenuLink linkName="Contact" url="Contact"/>
            </div>
        </div>
    )
}


export default HeaderContent