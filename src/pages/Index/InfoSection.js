import React from 'react';

import * as SC from "./styles";

const InfoSection = () => {
    return (
        <SC.Section marginBottom={30}>
            <SC.InfoWrapper>
                <SC.Info>
                    <SC.InfoItem>
                        <SC.InfoItemTitle>
                            Владельцы
                        </SC.InfoItemTitle>
                        <SC.InfoItemContent>
                            <p>
                                Иваницкий Олег Викторович
                            </p>
                            <p>
                                Самков Александр Сергеевич
                            </p>
                        </SC.InfoItemContent>
                    </SC.InfoItem>

                    <SC.InfoItem>
                        <SC.InfoItemTitle>
                            С кем мы работаем
                        </SC.InfoItemTitle>
                        <SC.InfoItemContent>
                            <p>
                                РОССЕТИ
                            </p>
                            <p>
                                ОАО «МРСК – Урала»
                            </p>
                            <p>
                                ООО «Тесла»
                            </p>
                            <p>
                                РМК АО «Томинский ГОК»
                            </p>
                            <p>
                                АО «Михеевский ГОК»
                            </p>
                            <p>
                                ОАО «Пермэнерго»
                            </p>
                        </SC.InfoItemContent>
                    </SC.InfoItem>
                </SC.Info>
            </SC.InfoWrapper>
        </SC.Section>
    );
};

export default InfoSection;
