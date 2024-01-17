import styled from "styled-components";

export const FullPageCalendar = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  .custom-calendar {
    width: 1000%;
    max-width: 1400px;
  }
  .react-calendar__tile {
    width: 100% !important;
    aspect-ratio: 1.3;
    background-color: white;
    border: 1px solid #cbc8c8;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      background-color: #f6f3f3;
    }
  }
`;
