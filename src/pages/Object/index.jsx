import React, {useEffect, useState} from 'react';

import MainLayout from "../../ui/Layouts/MainLayout";
import Slider from "../../ui/Slider";

import objectPlaceholder from "../../static/object-placeholder.png";

import * as SC from './styles';
import {useParams} from "react-router-dom";
import {fetchApi} from "../../services/fetch";
import Loader from "../../ui/Loader";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  height: '550px',
};

const Objects = () => {

  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const [object, setObject] = useState(null);

  useEffect(() => {
    fetchApi(`constructions/${id}`).then((constructionRes) => {
      setObject(constructionRes);
    })
  }, []);


  return (
      <MainLayout>
        {!object && (
            <Loader />
        )}
        {object && (
            <>
              <SC.Title>
                {object.name}
              </SC.Title>
              <SC.ContentWrapper>
                <SC.ObjectWrapper>
                  <SC.Object>
                    <SC.SliderWrapper>
                      <Slider options={{
                        ...settings,
                        afterChange: (index) => setCurrentPage(index + 1)
                      }}>
                        {object['image_urls'].map((img) => (
                            <img src={img} alt="object"/>
                        ))}
                      </Slider>
                    </SC.SliderWrapper>
                    <SC.PageIngo>
                      {`${currentPage}/${object['image_urls'].length}`}
                    </SC.PageIngo>
                    <SC.Divider/>
                  </SC.Object>
                </SC.ObjectWrapper>

                <SC.Info>
                  <SC.TextInfo marginBottom={8}>
                    Заказчик
                  </SC.TextInfo>

                  <SC.TextInfo marginBottom={140}>
                    {object.payer}
                  </SC.TextInfo>

                  <SC.TextInfo marginBottom={32}>
                    Перечень выполненных работ
                  </SC.TextInfo>
                  <SC.TextInfoList>
                    {object['works_done'].map((item) => (
                        <SC.TextInfoListItem>
                          {item}
                        </SC.TextInfoListItem>
                    ))}
                  </SC.TextInfoList>
                </SC.Info>
              </SC.ContentWrapper>
            </>
        )}
      </MainLayout>
  );
};

export default Objects;
