import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { Avatar, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <Typography variant="h2" className="testimonial-title">
        Reviews
      </Typography>
      <div className="testimonials">
        <div className="testimonial">
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            <Card
              img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg"
              rating={5}
            />
            <Card
              img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
              rating={4}
            />
            <Card
              img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
              rating={3}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Card = ({ img, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="card">
      <div className="card-content" style={{ paddingLeft: "10px" }}>
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginRight: 20,
          }}
        />
        <div className="review-text" style={{ marginLeft: "10px", paddingRight: "10px" }}>
          <Typography variant="subtitle1" component="p" style={{ fontWeight: 500, color: "green", paddingBottom: "10px" }}>
            Anshuman
          </Typography>
          <div className="rating" style={{ fontWeight: 500, paddingBottom: "20px" }}>{renderStars()}</div>
          <Typography variant="body1" component="p" style={{ paddingBottom: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima
            iure quaerat cumque nesciunt reprehenderit voluptates aspernatur similique!
            Eius, nisi excepturi, temporibus magni consequuntur, tenetur iusto placeat
            minima accusamus expedita quia dolore?
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
