import React from "react";
import { useState } from "react";
import {
  StyledLink,
  NavbarContainer,
  LogoBlock,
  ArrowIcon,
  MainContainer,
} from "../styled-components/StylesForNavbar/Styles";
import SideBar from "./SideBar";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MainContainer>
      <NavbarContainer>
        <nav>
          <div className="logo-block">
            <LogoBlock>
              <img src="" alt="Logo" />
              <StyledLink onClick={toggleMenu}>Products</StyledLink>{" "}
              <ArrowIcon onClick={toggleMenu}>▼</ArrowIcon>
              <StyledLink>Enterprise</StyledLink>{" "}
              <StyledLink>Customers</StyledLink>
              <StyledLink>Company</StyledLink>
            </LogoBlock>

            <SideBar isMenuOpen={isMenuOpen} />
          </div>
        </nav>
      </NavbarContainer>
    </MainContainer>
  );
};

export default Navbar;
