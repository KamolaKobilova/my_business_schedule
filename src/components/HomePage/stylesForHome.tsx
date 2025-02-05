import React from "react";
import styled from "styled-components";

export const stylesForHome = () => {
  return <div>stylesForHome</div>;
};

export const StyledDiv = styled.div`
  display: flex;
  width: 600px;
  height: 132.19px;
  margin-top: 220px;
  margin-left: 120px;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
`;

export const Button = styled.button`
  display: inline-flex;
  height: 50px;
  padding: 17px 23px 17px 30px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 13.8px;
  flex-shrink: 0;
  width: 220px;
  border-radius: 2px;
  background-color: #f60014;
  border-color: #f60014;
  color: #ffffff;
`;
export const Container = styled.div`
  background: #f8f9fb;
`;
export const Picture = styled.div`
  width: 1030px;
  height: 308.48px;
  flex-shrink: 0;
  margin-top: 160px;
`;
export const Feature = styled.div`
  width: 390px;
  height: 706.09px;
  flex-shrink: 0;
  position: absolute;
  top: 170px;
  margin-left: 1000px;
  border-radius: 5px;
  border: 1px solid #e7ebf0;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #e7ebf0;
  background: #fff;

  li {
    margin-left: -18px;
    list-style: none;

    img {
      width: 70px;
    }
  }
  h2 {
    color: #056cb8;
  }
`;

export const Region = styled.div`
  width: 1107px;
  height: 205.3px;
  flex-shrink: 0;
  background-color: #ffffff;
  margin-left: 260px;
  margin-top: 120px;
`;
