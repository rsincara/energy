import React from 'react';

import  * as SC from './styles';

import objectPlaceholder from '../../static/object-placeholder-little.png';
import Slider from "../../ui/Slider";
import {RoutesPath} from "../../constants/routesPath";

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
              <SC.ImageWrapper>
                <SC.Image src={objectPlaceholder} alt="object placeholder" />
              </SC.ImageWrapper>
              <SC.ImageWrapper>
                <SC.Image src={objectPlaceholder} alt="object placeholder" />
              </SC.ImageWrapper>
            </Slider>
          </SC.SliderWrapper>
          <SC.Link to={RoutesPath.object.replace(':id', '1')}>
            Реконструкция электроснабжения СНТ «Любитель 1»
          </SC.Link>
          <SC.City>
            г. Челябинск
          </SC.City>
        </SC.Object>
        <SC.Divider />
      </SC.ObjectWrapper>

  );
};

export default Object;
