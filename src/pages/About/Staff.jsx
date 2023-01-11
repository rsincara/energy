import React, {useEffect, useState} from 'react';

import * as SC from './styles';
import Employee from "./Employee";
import Slider from "../../ui/Slider";
import {fetchApi} from "../../services/fetch";
import Loader from "../../ui/Loader";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  darkTheme: true,
};

const Staff = () => {

  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    fetchApi('employees').then((employeesRes) => {
      setEmployees(employeesRes);
    })
  }, []);

  return (
      <SC.Section>
        <SC.SectionTitle>
          Сотрудники
        </SC.SectionTitle>

        {!employees && (
            <Loader />
        )}

        {employees && (
            <>
              <SC.StaffWrapper>
              {employees.length > 1 && (
                  <Slider options={settings}>
                    {employees.map((employee) => (
                        <Employee employee={employee}/>
                    ))}
                  </Slider>
              )}
                {employees.length === 1 && (
                    <Employee employee={employees[0]}/>
                )}
              </SC.StaffWrapper>
            </>
        )}


      </SC.Section>
  );
};

export default Staff;
