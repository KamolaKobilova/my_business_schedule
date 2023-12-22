import React from "react";
import { DropdownMenu } from "../../styled-components/StylesForNavbar/Styles";

interface SideBarProps {
  isMenuOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isMenuOpen }) => {
  return <DropdownMenu isOpen={isMenuOpen}></DropdownMenu>;
};

export default SideBar;
