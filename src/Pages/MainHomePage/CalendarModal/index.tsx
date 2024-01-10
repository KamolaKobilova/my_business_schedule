import React from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalContainer,
} from "../StylesForMainHomePage";

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
            <h1>Bookings</h1>
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
