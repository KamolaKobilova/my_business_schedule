import React from "react";
import { NavButton, Navbar } from "../StylesForMainHomePage";
import { useState } from "react";
import { CalendarModal } from "../CalendarModal";

export const HomePageNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <NavButton onClick={handleOpenModal}>Calendar</NavButton>
      <NavButton>Services</NavButton>
      <NavButton>Staff</NavButton>
      <NavButton>My profile</NavButton>
      <NavButton>Booking page</NavButton>
      {isModalOpen && <CalendarModal onClose={handleCloseModal} />}
    </Navbar>
  );
};
