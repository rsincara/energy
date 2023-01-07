import React from 'react';

import * as SC from './styles';
import Employee from "./Employee";
import Slider from "../../ui/Slider";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  darkTheme: true,
};

const Staff = () => {
  return (
      <SC.Section>
        <SC.SectionTitle>
          Сотрудники
        </SC.SectionTitle>

        <SC.StaffWrapper>
          <Slider options={settings}>
            <Employee />
            <Employee />
            <Employee />
          </Slider>
        </SC.StaffWrapper>
      </SC.Section>
  );
};

export default Staff;
