import styled from "styled-components";

const mainPurple = "#4f4a7b";

export const Navbar = styled.nav`
  max-width: 1920px;
  display: flex;
  gap: 20px;
  background-color: ${mainPurple};
`;

export const NavButton = styled.button`
  color: white;
  font-size: 20px;
  background-color: ${mainPurple};
  border: none;
  width: 150px;
  height: 60px;
  &:hover {
    border-bottom: 4px solid red;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  height: auto;
  width: 800px;
  /* width: auto; */
  /* padding: 20px; */
  border-radius: 10px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 115px;
  left: 1130px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;
export const ModalContainer = styled.div`
  display: flex;

  .switch-block {
    display: flex;
    flex-direction: column;
    background-color: #f9f9fa;
    width: 280px;
    height: 500px;
    border-radius: 10px 0 0 10px;
    padding: 5px 20px;
  }
  .switch-block h1 {
    color: ${mainPurple};
  }
  .switch-block h3 {
    color: ${mainPurple};
    margin-top: 22px;
  }
  .switch-block p {
    margin-top: 0;
  }

  .input-block {
    padding: 10px;
    display: flex;
    flex-direction: column;

    padding: 50px;
  }
  .input-block h1 {
    color: ${mainPurple};
    margin-top: 0;
  }
  .input-block h3 {
  }
`;
