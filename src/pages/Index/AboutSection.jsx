import React from 'react';

import * as SC from './styles';

import aboutImage from '../../static/about.png';
import {RoutesPath} from "../../constants/routesPath";

const AboutSection = () => {
    return (
        <SC.Section marginBottom={54}>
            <SC.AboutCompany>
                <SC.AboutImageWrapper>
                    <img src={aboutImage} alt="about us" />
                </SC.AboutImageWrapper>

                <SC.AboutTextWrapper>
                    <SC.SectionTitle textAlign="left">
                        О компании
                    </SC.SectionTitle>
                    <SC.AboutText>
                        Компания ООО «Новая Энергия» успешна на рынке электроэнергетики уже более пятнадцати лет.
                        Компания занимается капитальным строительством энергообъектов,<br />
                        монтажом электрообрудования, диагностикой кабельных линий <br />
                        и испытаниями высоковольтного оборудования. <br /><br />

                        На счету компании десятки реализованных проектов, <br />
                        в том числе строительство подстанций «под ключ». <br /><br />

                        Предприятие реализует проекты на территориях Свердловской, <br />
                        Челябинской, Тюменской областей, Пермского края и в других регионах России. <br /><br />

                        ООО «Новая Энергия» располагает обширной материально-технической базой. Доставка крупногабаритного тяжеловесного оборудования до приобъектного склада обеспечивается собственным автотранспортом.  Высокая техническая оснащенность предприятия позволяет проводить строительно-монтажные работы в любое время года и в любой местности.
                    </SC.AboutText>
                    <SC.MoreLink to={RoutesPath.about}>
                        Подробнее ->
                    </SC.MoreLink>
                </SC.AboutTextWrapper>
            </SC.AboutCompany>
        </SC.Section>
    );
};

export default AboutSection;
