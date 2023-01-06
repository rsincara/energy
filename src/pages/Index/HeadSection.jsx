import React from 'react';

import * as SC from "./styles";

const HeadSection = () => {
    return (
        <SC.Section marginBottom={167}>
            <SC.HeadSectionContent>
                <SC.MontageInfo>
                    Профессиональный монтаж <br />
                    для всей Челябинской области
                </SC.MontageInfo>

                <SC.Age>
                    <SC.AgeNumber>
                        16
                    </SC.AgeNumber>
                    <SC.AgeText>
                        Лет
                    </SC.AgeText>
                    <SC.AgeInfo>
                        на рынке
                    </SC.AgeInfo>
                </SC.Age>

                <SC.ContactUsButtonWrapper>
                    <SC.ContactUsButton>
                        Связаться с нами
                    </SC.ContactUsButton>
                </SC.ContactUsButtonWrapper>
            </SC.HeadSectionContent>
        </SC.Section>
    );
};

export default HeadSection;
