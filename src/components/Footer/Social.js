import React from 'react';

import './styles';
import * as SC from "./styles";
import EmailIcon from "../../ui/Icons/Email";
import MobileFooterIcon from "../../ui/Icons/MobileFooter";
import PointerIcon from "../../ui/Icons/Pointer";
import ArrowIcon from "../../ui/Icons/Arrow";
import {RoutesPath} from "../../constants/routesPath";

const Social = () => {
    return (
        <SC.Block>
            <SC.BlockTitle>
                Социальные сети
            </SC.BlockTitle>
            <SC.Items height={120}>
                <SC.ItemWrapper>
                    <SC.GeneralLinksIconWrapper>
                        <ArrowIcon />
                    </SC.GeneralLinksIconWrapper>
                    <SC.GeneralLink to={"https://vk.com"}>
                        VK.com
                    </SC.GeneralLink>
                </SC.ItemWrapper>

                <SC.ItemWrapper>
                    <SC.GeneralLinksIconWrapper>
                        <ArrowIcon />
                    </SC.GeneralLinksIconWrapper>
                    <SC.GeneralLink to={"https://instagram.com"}>
                        Instagram
                    </SC.GeneralLink>
                </SC.ItemWrapper>

                <SC.ItemWrapper>
                    <SC.GeneralLinksIconWrapper>
                        <ArrowIcon />
                    </SC.GeneralLinksIconWrapper>
                    <SC.GeneralLink to={"https://twitter.com"}>
                        Twitter
                    </SC.GeneralLink>
                </SC.ItemWrapper>
            </SC.Items>
        </SC.Block>
    );
};

export default Social;
