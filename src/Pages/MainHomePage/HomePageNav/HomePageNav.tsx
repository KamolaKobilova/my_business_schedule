import React from "react";
import { NavButton, Navbar } from "../StylesForMainHomePage";
import { useState } from "react";
import { CalendarModal } from "../CalendarModal";
import { NavLink } from "react-router-dom";

export const HomePageNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("modal open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("modal closed");
  };
  return (
    <Navbar>
      <div></div>

      <NavLink to="/calendar">
        <NavButton>Calendar</NavButton>
      </NavLink>
      <NavButton>Services</NavButton>
      <NavButton>Staff</NavButton>
      <NavButton>My profile</NavButton>
      <NavButton onClick={handleOpenModal}>Booking page</NavButton>
      {isModalOpen && <CalendarModal onClose={handleCloseModal} />}
    </Navbar>
  );
};
