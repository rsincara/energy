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

const Object = ({ object }) => {
  return (
      <SC.ObjectWrapper>
        <SC.Object>
          <SC.SliderWrapper>
            <Slider options={settings}>
              {object['image_urls'].map((url) => (
                  <SC.ImageWrapper>
                    <SC.Image src={url} alt="object" />
                  </SC.ImageWrapper>
              ))}
            </Slider>
          </SC.SliderWrapper>
          <SC.Link to={RoutesPath.object.replace(':id', object.id)}>
            {object.name}
          </SC.Link>
          <SC.City>
            {object.city || 'Не указано'}
          </SC.City>
        </SC.Object>
        <SC.Divider />
      </SC.ObjectWrapper>

  );
};

export default Object;
