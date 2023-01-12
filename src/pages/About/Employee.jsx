import React from 'react';

import employee from '../../static/our-employee-placeholder.png';

import * as SC from './styles';

const Employee = ({ employee }) => {
  return (
      <SC.Employee>
        <SC.EmployeePhotoWrapper>
          <img src={employee['photo_url']} alt="our employee" />
        </SC.EmployeePhotoWrapper>
        <SC.EmployeeName>
          {employee['full_name']}
        </SC.EmployeeName>
        <SC.EmployeePosition>
          {employee.speciality}
        </SC.EmployeePosition>
        <SC.EmployeeDescription>
          {employee.description}
        </SC.EmployeeDescription>
      </SC.Employee>
  );
};

export default Employee;
