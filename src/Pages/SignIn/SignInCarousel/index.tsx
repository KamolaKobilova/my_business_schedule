import React, { useState, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  StyledCard,
  StyledImg,
  StyledCaption,
  CustomCarousel,
} from "../StylesForSignIn/styles";

type CardProps = {
  id: number;
  src: string;
  alt: string;
};

const Card: React.FC<CardProps> = ({ id, src, alt }): JSX.Element => {
  const [heading, description] = alt.split(":");

  return (
    <StyledCard>
      <StyledImg src={src} alt={alt} />
      <div>
        <StyledCaption as="h1">{heading}</StyledCaption>
        <StyledCaption as="p">{description}</StyledCaption>
      </div>
    </StyledCard>
  );
};

const SignInCarousel = () => {
  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    setData([
      {
        id: 1,
        src: "/assets/SignInImg/card1.png",
        alt: "Time Optimization:Streamline your workflow and maximize productivity by efficiently organizing tasks. Set priorities, deadlines, and reminders to stay on track.",
      },

      {
        id: 2,
        src: "/assets/SignInImg/card2.png",
        alt: "Client Engagement:Boost client interactions by scheduling and managing appointments seamlessly.Share real-time updates and collaborate effortlessly with clients.",
      },
      {
        id: 3,
        src: "/assets/SignInImg/card3.png",
        alt: "Effective Planning:Plan your day, week, or month with ease using our intuitive calendar feature.Allocate time wisely and achieve work-life balance effortlessly.",
      },
    ]);
  }, []);

  return (
    <div>
      <CustomCarousel showStatus={false} infiniteLoop autoPlay interval={3000}>
        {data.map((item) => (
          <Card key={item.id} id={item.id} src={item.src} alt={item.alt} />
        ))}
      </CustomCarousel>
    </div>
  );
};
export default SignInCarousel;
