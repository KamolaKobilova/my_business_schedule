import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
const colors = {
  back: "#fcfcfc",
};

export const StyledCard = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  /* width: auto; */
`;
export const CustomCarousel = styled(Carousel)`
  max-width: 450px;
  height: auto;
`;
export const StyledImg = styled.img`
  width: 80px;
  height: 350px;
  border-radius: 200px, 0 0 20px;
`;
export const StyledCaption = styled.div`
  font-size: 20px;
  color: #0e3067;
  display: flex;
  font-weight: 10px;
  flex-direction: column;
  /* align-items: start; */
`;

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;
export const Back = styled.div`
  background-image:url("./assets/SignInImg/back.png")
  max-width:1920px;
  
`;
export const SignInBlock = styled.div`
  width: 900px;
  margin: 30px auto;
  height: auto;
  display: flex;
  /* align-items: center; */
  padding: 30px;
  background-color: ${colors.back};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

export const InputBlock = styled.div`
  width: 600px;

  h1 {
    color: #0e3067;
  }
  p {
    font-size: 20px;
    color: #0e3067;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    margin-top: 40px;
  }
  input {
    width: 350px;
    height: 35px;
    padding-left: 10px;
    /* border: 1px solid #eaf9f9rrg; */
    border: none;
    border-radius: 3px;
    outline: none;
    /* background-color: #eaf9f9rrg; */
    box-shadow: 0 4px 8px rgba(59, 58, 58, 0.5);
  }
  button {
    width: 360px;
    height: 40px;
    border-radius: 3px;
    background-color: #159aff;
    color: white;
    border: 1px solid #159aff;
    cursor: pointer;
    margin-top: 20px;
  }
`;
