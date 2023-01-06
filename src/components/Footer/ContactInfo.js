import React from 'react';

import './styles';
import * as SC from "./styles";
import EmailIcon from "../../ui/Icons/Email";
import MobileFooterIcon from "../../ui/Icons/MobileFooter";
import PointerIcon from "../../ui/Icons/Pointer";

const ContactInfo = () => {
    return (
        <SC.Block>
            <SC.BlockTitle>
                Контактная информация
            </SC.BlockTitle>
            <SC.Items height={108}>
                <SC.ItemWrapper>
                    <SC.IconWrapper>
                        <SC.EmailIconWrapper>
                            <EmailIcon />
                        </SC.EmailIconWrapper>
                    </SC.IconWrapper>

                    <SC.LinkUtil href="mailto:info@gk-newenergy.su">
                        info@gk-newenergy.su
                    </SC.LinkUtil>
                </SC.ItemWrapper>

                <SC.ItemWrapper>
                    <SC.IconWrapper>
                        <SC.MobileIconWrapper>
                            <MobileFooterIcon />
                        </SC.MobileIconWrapper>
                    </SC.IconWrapper>

                    <SC.LinkUtil href="tel:73512172377">
                        +7 (351) 217-23-77
                    </SC.LinkUtil>
                </SC.ItemWrapper>

                <SC.ItemWrapper>
                    <SC.IconWrapper>
                        <SC.PointerIconWrapper>
                            <PointerIcon />
                        </SC.PointerIconWrapper>
                    </SC.IconWrapper>

                    <SC.PointerInfo>
                        Челябинск, ул Линейная, д. 86
                    </SC.PointerInfo>
                </SC.ItemWrapper>
            </SC.Items>
        </SC.Block>
    );
};

export default ContactInfo;
