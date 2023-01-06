import React from 'react';

import EnergyLogo from '../../static/energy-logo.png';
import ESasLogo from '../../static/esas-logo.png';

import * as SC from './styles';
import EmailIcon from "../../ui/Icons/Email";
import MobileIcon from "../../ui/Icons/Mobile";
import PointerIcon from "../../ui/Icons/Pointer";
import MobileFooterIcon from "../../ui/Icons/MobileFooter";
import ContactInfo from "./ContactInfo";
import GeneralLinks from "./GeneralLinks";
import Social from "./Social";

const Footer = () => {
    return (
        <SC.Footer>
            <SC.Logos>
                <SC.EnergyLogoWrapper>
                    <img src={EnergyLogo} alt="energy logo"/>
                </SC.EnergyLogoWrapper>
                <SC.ESasLogoWrapper>
                    <img src={ESasLogo} alt="esas logo"/>
                </SC.ESasLogoWrapper>
            </SC.Logos>

            <ContactInfo />
            <GeneralLinks />
            <Social />
        </SC.Footer>
    );
};

export default Footer;
