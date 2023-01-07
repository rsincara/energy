import React from 'react';

import MainLayout from "../../ui/Layouts/MainLayout";
import Slider from "../../ui/Slider";

import objectPlaceholder from "../../static/object-placeholder.png";

import * as SC from './styles';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  height: '550px',
};

const Objects = () => {
    return (
        <MainLayout>
            <SC.Title>
              Реконструкция электроснабжения СНТ «Любитель 1»
            </SC.Title>

          <SC.ContentWrapper>
            <SC.ObjectWrapper>
              <SC.Object>
                <SC.SliderWrapper>
                  <Slider options={settings}>
                    <img src={objectPlaceholder} alt="object placeholder" />
                    <img src={objectPlaceholder} alt="object placeholder" />
                  </Slider>
                </SC.SliderWrapper>
              </SC.Object>

              <SC.Divider />
            </SC.ObjectWrapper>

            <SC.Info>
              <SC.TextInfo marginBottom={8}>
                Заказчик
              </SC.TextInfo>

              <SC.TextInfo marginBottom={140}>
                ООО “Урал-Заказ”
              </SC.TextInfo>

              <SC.TextInfo marginBottom={32}>
                Перечень выполненных работ
              </SC.TextInfo>
              <SC.TextInfoList>
                <SC.TextInfoListItem>
                  монтаж реклоузера и ПКУ
                </SC.TextInfoListItem>
                <SC.TextInfoListItem>
                  строительство ТП
                </SC.TextInfoListItem>
                <SC.TextInfoListItem>
                  монтаж кабельной линии
                </SC.TextInfoListItem>
              </SC.TextInfoList>
            </SC.Info>
          </SC.ContentWrapper>
        </MainLayout>
    );
};

export default Objects;
