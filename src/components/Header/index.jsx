import React from 'react';

import EnergyLogo from '../../static/energy-logo.png';
import ESasLogo from '../../static/esas-logo.png';

import * as SC from './styles';
import MobileIcon from "../../ui/Icons/Mobile";
import ClocksIcon from "../../ui/Icons/Clocks";
import EmailIcon from "../../ui/Icons/Email";
import PointerIcon from "../../ui/Icons/Pointer";
import {RoutesPath} from "../../constants/routesPath";

const MainLayout = () => {
    return (
        <SC.Header>
            <SC.Logos>
                <SC.EnergyLogoWrapper>
                    <img src={EnergyLogo} alt="energy logo" />
                </SC.EnergyLogoWrapper>
                <SC.ESasLogoWrapper>
                    <img src={ESasLogo} alt="esas logo" />
                </SC.ESasLogoWrapper>
            </SC.Logos>

            <SC.GeneralContent>
                <SC.GeneralInfo>
                    <SC.ItemWrapper>
                        <SC.IconWrapper>
                            <MobileIcon />
                        </SC.IconWrapper>
                        <SC.LinkUtil href="tel:73512172377">
                            +7 (351) 217-23-77
                        </SC.LinkUtil>
                    </SC.ItemWrapper>
                    <SC.ItemWrapper>
                        <SC.IconWrapper>
                            <ClocksIcon />
                        </SC.IconWrapper>
                        <div>
                            Пн-Пт 09:00-18:00
                        </div>
                    </SC.ItemWrapper>
                    <SC.ItemWrapper>
                        <SC.IconWrapper>
                            <EmailIcon />
                        </SC.IconWrapper>
                        <SC.LinkUtil href="mailto:info@gk-newenergy.su">
                            info@gk-newenergy.su
                        </SC.LinkUtil>
                    </SC.ItemWrapper>
                    <SC.ItemWrapper>
                        <SC.IconWrapper>
                            <PointerIcon />
                        </SC.IconWrapper>
                        <div>
                            Челябинск, ул Линейная, д. 86
                        </div>
                    </SC.ItemWrapper>
                </SC.GeneralInfo>

                <SC.Navbar>
                    <SC.NavItem to={RoutesPath.index}>
                        Главная
                    </SC.NavItem>

                    <SC.NavItem to={RoutesPath.objects}>
                        Объекты
                    </SC.NavItem>

                    <SC.NavItem to={RoutesPath.vacancies}>
                        Вакансии
                    </SC.NavItem>

                    <SC.NavItem to={RoutesPath.about}>
                        О компании
                    </SC.NavItem>

                    <SC.NavItem to={RoutesPath.certificates}>
                        Сертификаты
                    </SC.NavItem>

                    <SC.NavItem to={RoutesPath.contacts}>
                        Контакты
                    </SC.NavItem>
                </SC.Navbar>
            </SC.GeneralContent>
        </SC.Header>
    );
};

export default MainLayout;
