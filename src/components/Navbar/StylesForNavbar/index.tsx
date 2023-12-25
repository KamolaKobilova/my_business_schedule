import styled, { keyframes } from "styled-components";
export const MainContainer = styled.div`
  max-width: 1920px;
`;
export const NavbarContainer = styled.div`
  margin: 0 auto;
  background-color: #e7ebf0;
  padding: 10px;
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLink = styled.a`
  color: #010101;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: #5671a1;
  }
`;

export const ArrowIcon = styled.span`
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    color: #5671a1;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "grid" : "none")};
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  background-color: #f8f9fb;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
`;
export const DropdownContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #e7ebf0;
  padding: 10px;
`;

export const IconsForNavbar = styled.img`
  height: 50px;
  width: 50px;
`;

export const DropdownMiniBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSvg = styled.svg`
  margin-left: 20px;

  &:hover {
    color: #5671a1;
  }
`;
