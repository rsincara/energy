import React from 'react';

import culturePlaceholder from '../../static/culture-placeholder.png';

import * as SC from './styles';

const CultureItem = () => {
  return (
      <SC.CultureItem>
        <img src={culturePlaceholder} alt="culturePlaceholder" />

        <SC.Info>
          26 сентрября 2021 года <br />
          Мы с сотрудниками поехали на рыбалку, чтобы отпраздновать крупное строительство и поднять боевой дух
        </SC.Info>
      </SC.CultureItem>
  );
};

export default CultureItem;
