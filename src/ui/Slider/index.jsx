import React from 'react';

import * as SC from './styles';

const defaultOptions = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  height: '245px',
};

const Slider = ({
  options = defaultOptions,
  children,
}) => {
  return (
      <SC.Slider {...options}>
        {children}
      </SC.Slider>
  );
};

export default Slider;
