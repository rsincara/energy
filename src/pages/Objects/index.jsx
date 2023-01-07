import React from 'react';

import * as SC from './styles';
import MainLayout from "../../ui/Layouts/MainLayout";
import Object from "../../components/Object";

const Objects = () => {
    return (
        <MainLayout>
            <SC.Title>
              Объекты
            </SC.Title>

          <SC.ObjectsWrapper>
            {Array(12).fill().map(() => (
                <Object />
            ))}
          </SC.ObjectsWrapper>
        </MainLayout>
    );
};

export default Objects;
