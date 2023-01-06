import React, { useState } from 'react';

import ContactUsModal from "../../components/ContactUsModal";

import * as SC from "./styles";

const HeadSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <SC.Section marginBottom={167}>
            {isModalOpen && (
                <ContactUsModal onClose={handleCloseModal}/>
            )}
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
                    <SC.ContactUsButton onClick={() => setIsModalOpen(true)}>
                        Связаться с нами
                    </SC.ContactUsButton>
                </SC.ContactUsButtonWrapper>
            </SC.HeadSectionContent>
        </SC.Section>
    );
};

export default HeadSection;
