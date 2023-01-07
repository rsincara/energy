import React from 'react';

import * as SC from './styles';

import rosseti from '../../static/customers/rosseti.png';
import mrsk from '../../static/customers/mrsk.png';
import tesla from '../../static/customers/tesla.png';
import rmk from '../../static/customers/rmk.png';
import sverdlov from '../../static/customers/sverdlov.png';
import rmkTominsk from '../../static/customers/rmk-tominsk.png';
import permEnergy from '../../static/customers/perm-energy.png';

const Customers = () => {
  return (
      <SC.Section>
        <SC.SectionTitle>
          Кто обращался к нам
        </SC.SectionTitle>

        <SC.Customers>
          <img src={rosseti} alt="customer" />
          <img src={mrsk} alt="customer" />
          <img src={tesla} alt="customer" />
          <img src={rmk} alt="customer" />
          <img src={sverdlov} alt="customer" />
          <img src={rmkTominsk} alt="customer" />
          <img src={permEnergy} alt="customer" />
        </SC.Customers>

      </SC.Section>
  );
};

export default Customers;
