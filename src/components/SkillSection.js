import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/SkillSection.css';

const SlickBox = ({ logos, sliderColor }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }  
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
            
          }
        ]
      };

  return (
    <Slider {...settings} className="slick-box">
      {logos.map((logo, index) => (
        <div key={index} className="slick-box-slide">
          <div className="box-content" style={{ backgroundColor: sliderColor }}>
            <div className="logo-container">
              <img src={logo.imageUrl} alt={logo.altText} className="logo" />
            </div>
            <div className="text-container">
              <h2 className="logo-name">{logo.name}</h2>
              <p className="proficiency-text">{`Skill: ${logo.proficiency}`}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlickBox;
