import React, {useEffect, useState} from 'react';

import * as SC from './styles';
import MainLayout from "../../ui/Layouts/MainLayout";
import Object from "../../components/Object";
import {fetchApi} from "../../services/fetch";
import Loader from "../../ui/Loader";

const Objects = () => {

  const [objects, setObjects] = useState(null);

  useEffect(() => {
    fetchApi('constructions').then((objectsRes) => {
      setObjects(objectsRes);
    })
  }, []);

    return (
        <MainLayout>
            <SC.Title>
              Объекты
            </SC.Title>

          {!objects && (
              <Loader />
          )}
          {objects && (
              <SC.ObjectsWrapper>
                {objects.map((object) => (
                    <Object object={object} />
                ))}
              </SC.ObjectsWrapper>
          )}

        </MainLayout>
    );
};

export default Objects;
