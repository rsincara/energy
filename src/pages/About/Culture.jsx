import React from 'react';

import * as SC from './styles';
import CultureItem from "../../components/CultureItem";

const Culture = () => {
  return (
      <SC.Section>
        <SC.SectionTitle>
          Корпоративная культура
        </SC.SectionTitle>

        <SC.CultureWrapper>
          <CultureItem />
          <CultureItem />
          <CultureItem />
          <CultureItem />
          <CultureItem />
          <CultureItem />
        </SC.CultureWrapper>

      </SC.Section>
  );
};

export default Culture;
