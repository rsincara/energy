import React from 'react';

import * as SC from './styles';
import MainLayout from "../../ui/Layouts/MainLayout";
import Vacancy from "../../components/Vacancy";

const Vacancies = () => {
    return (
        <MainLayout>
          <SC.Title>
            Вакансии
          </SC.Title>

          <SC.VacanciesWrapper>
            <Vacancy />
            <Vacancy />
            <Vacancy />
          </SC.VacanciesWrapper>
        </MainLayout>
    );
};

export default Vacancies;
