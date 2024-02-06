import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const MySlider: React.FC<{Component: JSX.Element[],slidesToShow: number,slidesToScroll: number}> = ({Component,slidesToShow,slidesToScroll}): JSX.Element => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my_slider">
      <Slider {...settings}>
        {Component}
      </Slider>
    </div>
  );
};

export default MySlider;
