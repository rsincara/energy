import React from 'react';

import './styles';
import * as SC from "./styles";
import EmailIcon from "../../ui/Icons/Email";
import MobileFooterIcon from "../../ui/Icons/MobileFooter";
import PointerIcon from "../../ui/Icons/Pointer";
import ArrowIcon from "../../ui/Icons/Arrow";
import {RoutesPath} from "../../constants/routesPath";

const GeneralLinks = () => {
    return (
        <SC.Block>
            <SC.BlockTitle>
                Основные ссылки
            </SC.BlockTitle>
            <SC.Items height={120}>
                <SC.ItemWrapper>
                    <SC.GeneralLinksIconWrapper>
                        <ArrowIcon />
                    </SC.GeneralLinksIconWrapper>
                    <SC.GeneralLink to={RoutesPath.index}>
                        Главная
                    </SC.GeneralLink>
                </SC.ItemWrapper>

                <SC.ItemWrapper>
                    <SC.GeneralLinksIconWrapper>
                        <ArrowIcon />
                    </SC.GeneralLinksIconWrapper>
                    <SC.GeneralLink to={RoutesPath.about}>
                        О нас
                    </SC.GeneralLink>
                </SC.ItemWrapper>

                <SC.ItemWrapper>
                    <SC.GeneralLinksIconWrapper>
                        <ArrowIcon />
                    </SC.GeneralLinksIconWrapper>
                    <SC.GeneralLink to={RoutesPath.objects}>
                        Объекты
                    </SC.GeneralLink>
                </SC.ItemWrapper>

                <SC.ItemWrapper>
                    <SC.GeneralLinksIconWrapper>
                        <ArrowIcon />
                    </SC.GeneralLinksIconWrapper>
                    <SC.GeneralLink to={RoutesPath.contacts}>
                        Контакты
                    </SC.GeneralLink>
                </SC.ItemWrapper>
            </SC.Items>
        </SC.Block>
    );
};

export default GeneralLinks;
