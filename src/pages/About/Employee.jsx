import React from 'react';

import employee from '../../static/our-employee-placeholder.png';

import * as SC from './styles';

const Employee = () => {
  return (
      <SC.Employee>
        <SC.EmployeePhotoWrapper>
          <img src={employee} alt="our employee" />
        </SC.EmployeePhotoWrapper>
        <SC.EmployeeName>
          Иванов Иван Иванович
        </SC.EmployeeName>
        <SC.EmployeePosition>
          Главный инженер
        </SC.EmployeePosition>
        <SC.EmployeeDescription>
          Является сотрудником компании 15 лет, руководил многими строительствами,
          проектировал и создавал еще много всего, короче красавчик  и герой всей
          нашей компании
        </SC.EmployeeDescription>
      </SC.Employee>
  );
};

export default Employee;
