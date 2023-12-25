import React from "react";
import { useState } from "react";
import {
  StyledLink,
  NavbarContainer,
  LogoBlock,
  ArrowIcon,
  MainContainer,
  StyledSvg,
} from "./StylesForNavbar/Styles";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MainContainer>
      <NavbarContainer>
        <div className="logo-block">
          <LogoBlock>
            <img src="/NavbarImg/logo.png" alt="Logo" />
            <StyledLink onClick={toggleMenu}>Products</StyledLink>{" "}
            <ArrowIcon onClick={toggleMenu}>▼</ArrowIcon>
            <StyledLink>Enterprise</StyledLink>{" "}
            <StyledLink>Customers</StyledLink>
            <StyledLink>Company</StyledLink>
          </LogoBlock>
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="5" cy="12" r="1"></circle>
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
          </StyledSvg>{" "}
          <SideBar isMenuOpen={isMenuOpen} />{" "}
        </div>
      </NavbarContainer>
    </MainContainer>
  );
};

export default Navbar;
