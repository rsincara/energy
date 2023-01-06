import React from 'react';

import companyIcon from '../../../static/company-icon.png';

import * as SC from './styles';

const CompanyIcon = () => {
  return (
      <SC.CompanyIconWrapper>
        <img src={companyIcon} alt="company icon" />
      </SC.CompanyIconWrapper>
  );
};

export default CompanyIcon;
