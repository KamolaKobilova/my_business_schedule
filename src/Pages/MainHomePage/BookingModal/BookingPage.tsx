import React from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalContainer,Header
} from "./BookingStyles";
import logo from '../../../assets/BookingPage/logo.png'

interface CalendarModalProps {
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <ModalContainer>
          <div className="switch-block">
           <Header>
           <img src={logo} alt="" />
            <h1>Bookings</h1>
           </Header>
           
            <h3>Hi there,User</h3>
            <p>
              Welcome to Zoho Bookings. We’ll help you find the perfect time
              with your clients. Give us a little information about your
              business to start with and we’ll fit you right in.
            </p>
          </div>
          <div className="input-block">
            <h3>Tell us</h3>
            <h1>your business</h1>
          </div>
        </ModalContainer>
      </ModalContent>
    </ModalOverlay>
  );
};
