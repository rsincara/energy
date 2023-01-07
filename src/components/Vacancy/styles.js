import styled from "styled-components";

import background from '../../static/modal-background.jpg';
import employee from '../../static/employee.png';

export const VacancyWrapper = styled.div`
`;

export const Vacancy = styled.div`
  position: relative;

  margin-bottom: 55px;
`;

export const Head = styled.div`
  margin: 0 auto;
  
  width: 300px;
  height: 300px;
  
  border-radius: 100%;
  
  background-size: cover;
  background-image: url(${background});

  opacity: 0.7;
`;

export const Employee = styled.div`
  position: absolute;

  top: 12px;
  left: 175px;
  
  width: 196px;
  height: 289px;

  background-image: url(${employee});
`;

export const BodyWrapper = styled.div`
  position: relative;
  
  width: 545px;
  height: 416px;
  
  margin-top: -30px;
  
  opacity: 0.5;
  
  overflow: hidden;
  
  border-radius: 300px 300px 0 0;
  border: 1px solid #000000;

  background-image: url(${background});
  
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Info = styled.div`
  position: absolute;
  
  top: 275px;
  
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

export const Salary = styled.p`
  font-size: 22px;
  text-align: center;
  
  margin-bottom: 12px;
`;

export const Offer = styled.div`
  margin-bottom: 43px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 12px;
  
  text-align: center;
  font-size: 18px;
  font-weight: 400;
`;

export const FlexWrapper = styled.div`
  display: flex;
  
  justify-content: space-between;
  
  width: 80%;
  
  margin: 0 auto;
`;

export const List = styled.ul`
  font-size: 14px;
  
  list-style: inside;
`;

export const ListItem = styled.li`
  
`;

export const Requirements = styled.div`
  
`;

