import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
   console.log(props);
   const { className, onClick } = props;
   return (
      <div className={className} onClick={onClick}>
         <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
   );
};

const NextBtn = (props) => {
   const { className, onClick } = props;
   return (
      <div className={className} onClick={onClick}>
         <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
   );
};

const Testimonial = () => {
   return (
      <div className="testimonial-container">
         <div className="testimonial">
            {/* <h1>Reviews</h1> */}
            <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
               <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
               <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
               <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
            </Slider>
         </div>
      </div>
   );
};

const Card = ({ img }) => {
   return (
      <div className="card">
         <div className="card-content">
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
            <div className="review-text">
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Ipsam minima iure quaerat cumque nesciunt reprehenderit 
                   voluptates aspernatur similique! Eius, nisi excepturi, temporibus
                    magni consequuntur, tenetur iusto placeat minima accusamus 
                    expedita quia dolore?
               </p>
               <p style={{ fontStyle: "italic", marginTop: 25 }}>
                  <span style={{ fontWeight: 500, color: "green" }}>Anshuman</span> , 
                  
               </p>
            </div>
         </div>
      </div>
   );
};

export default Testimonial;
