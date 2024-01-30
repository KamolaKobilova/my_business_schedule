import React from "react";
import { NavButton, Navbar, NavRight } from "./BookingStyles";
import { useState } from "react";
import { CalendarModal } from "./BookingPage";
import {PlusOutlined, BellOutlined, SettingOutlined} from "@ant-design/icons";
import logo from '../../../assets/BookingPage/booking.png'


export const HomePageNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCHanged, setIsChanged] = useState(false);
  const [isCHanging, setIsChanging] = useState(false);

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
      <NavButton><img src={logo} alt="" style={{width: "30px", backgroundColor: "red" ,marginTop: "12px"}}/>  <span>Booking</span></NavButton>
      <NavButton style={{ color: isCHanging ? '#F8F8F8' : '#D3D3D3'}} 
      onMouseEnter={() => setIsChanging(true)}
      onMouseLeave={() => setIsChanging(false)}
      >Calendar</NavButton>
      <NavButton>Services</NavButton>
      <NavButton>Staff</NavButton>
      <NavButton>My profile</NavButton>
      <NavButton onClick={handleOpenModal}>Booking page</NavButton>
      {isModalOpen && <CalendarModal onClose={handleCloseModal} />}
      <span style={{marginLeft: "700px"}}>
       
        <NavRight>
          <SettingOutlined 
          style={{ fontSize: '24px', 
          color: isCHanged ? '#F8F8F8' : '#D3D3D3'  }}
          onMouseEnter={() => setIsChanged(true)}
          onMouseLeave={() => setIsChanged(false)}
          />
          </NavRight>  
      
        <NavRight><PlusOutlined
         style={{ fontSize: '24px',
         color: isHovered ? '#F8F8F8' : '#D3D3D3',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
          /></NavRight>  
        <NavRight><BellOutlined
         style={{ fontSize: '24px',
         color: isCHanging ? '#F8F8F8' : '#D3D3D3',
         width: '15px'
          }}
          onMouseEnter={() => setIsChanging(true)}
          onMouseLeave={() => setIsChanging(false)}
          />
         </NavRight>  
         <NavRight>
          <img src="" alt="/" style={{width: "140px", height: "100px", borderRadius:"50%", border:"2px solid white"}} />
         </NavRight>
      </span>
    </Navbar>
  );
};
