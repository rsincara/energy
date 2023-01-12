import React from 'react';

import * as SC from './styles';
import MainLayout from "../../ui/Layouts/MainLayout";
import Vacancy from "../../components/Vacancy";

const vacancies = [
  {
    title: 'Электромонтер по обслуживанию электрооборудования',
    salary: '80 000 р',
    offer: [
        'Полный рабочий день',
        'Частота выплат дважды в месяц',
        'Заработная плата от 80 000 р',
        'График работы 5\\2 с 9-00 до 18-00',
    ],
    requirements: [
      'Опыт работы не менее 3 лет',
      '3-4 группа допуска',
      'Наличие водительского удостоверения категории В',
      'Желательно профильное образование',
    ]
  },
  {
    title: 'Электромонтажник по силовым сетям',
    salary: '60 000 р',
    offer: [
      'Полный рабочий день',
      'Частота выплат дважды в месяц',
      'Заработная плата от 60 000 р',
      'График работы 5\\2 с 9-00 до 18-00',
    ],
    requirements: [
      'Опыт работы более 2 лет',
      'Опыт работы в команде',
      'Составление еженедельного отчёта о проделанной работе',
      'Желательно профильное образование',
    ]
  },
  {
    title: 'Техник-электрик',
    salary: '120 000 р',
    offer: [
      'Полный рабочий день',
      'Частота выплат дважды в месяц',
      'Заработная плата 120 000 р',
      'График работы 2\\2 с 10-00 до 18-00',
      'Спецодежда предоставляется',
    ],
    requirements: [
      'Опыт работы не менее 3 лет',
      'Возраст старше 40 лет',
      'Наличие квалификационных удостоверений',
      'Наличие сертификата о вакцинации',
    ]
  }
];

const Vacancies = () => {
    return (
        <MainLayout>
          <SC.Title>
            Вакансии
          </SC.Title>

          <SC.VacanciesWrapper>
            {vacancies.map((vacancy) => (
                <Vacancy vacancy={vacancy} />
            ))}
          </SC.VacanciesWrapper>
        </MainLayout>
    );
};

export default Vacancies;
