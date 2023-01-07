import React from 'react';

import  * as SC from './styles';

import objectPlaceholder from '../../static/object-placeholder.png';
import Slider from "../../ui/Slider";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  height: '245px',
};

const Object = () => {
  return (
      <SC.ObjectWrapper>
        <SC.Object>

          <SC.SliderWrapper>
            <Slider options={settings}>
              <img src={objectPlaceholder} alt="object placeholder" />
              <img src={objectPlaceholder} alt="object placeholder" />
            </Slider>
          </SC.SliderWrapper>
          <SC.Title>
            Реконструкция электроснабжения СНТ «Любитель 1»
          </SC.Title>
          <SC.City>
            г. Челябинск
          </SC.City>
        </SC.Object>
        <SC.Divider />
      </SC.ObjectWrapper>

  );
};

export default Object;
