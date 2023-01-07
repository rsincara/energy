import React from 'react';

import companyHistory from '../../static/company-history.png';

import * as SC from './styles';

const CompanyHistory = () => {
  return (
      <SC.Section>
        <SC.SectionTitle>
          История компании
        </SC.SectionTitle>

        <SC.CompanyHistoryWrapper>
          <SC.CompanyHistoryImageWrapper>
            <img src={companyHistory} alt="company history" />
          </SC.CompanyHistoryImageWrapper>

          <SC.CompanyHistoryText>
            Все началось в далеких 90-х, образование компании Анкер под руководством Иваницкого О.В., далее преобразование в компанию ООО «Новая Энергия» в 2006 году и в 2020 начало полного ребрендинга компании совместно с ООО «Э-САС».
            <br /><br />
            Все началось в далеких 90-х, образование компании Анкер под руководством Иваницкого О.В., далее преобразование в компанию ООО «Новая Энергия» в 2006 году и в 2020 начало полного ребрендинга компании совместно с ООО «Э-САС»
            <br /><br />
            Объединив опыт и профессионализм Иваницкого О.В. и знания, амбиции и молодость Самкова А.С.
          </SC.CompanyHistoryText>
        </SC.CompanyHistoryWrapper>
      </SC.Section>
  );
};

export default CompanyHistory;
