import React from 'react';

import * as SC from './styles';
import OverheadCableIcon from "../../ui/Icons/OverheadCable";
import ProectingIcon from "../../ui/Icons/Proecting";
import MontageIcon from "../../ui/Icons/Montage";
import AstronomyIcon from "../../ui/Icons/Astronomy";
import ReconstructionIcon from "../../ui/Icons/Reconstruction";

const WhatWeDoing = () => {
    return (
        <SC.Section marginBottom={48}>
            <SC.SectionTitle>
                Чем мы занимаемся
            </SC.SectionTitle>

            <SC.WhatWeDoingItems>
                <SC.WhatWeDoingItem>
                    <SC.WhatWeDoingItemIconWrapper>
                        <OverheadCableIcon />
                    </SC.WhatWeDoingItemIconWrapper>
                    <SC.WhatWeDoingItemText>
                        Строительство воздушно-кабельных линий
                    </SC.WhatWeDoingItemText>
                </SC.WhatWeDoingItem>

                <SC.WhatWeDoingDivider />

                <SC.WhatWeDoingItem>
                    <SC.WhatWeDoingItemIconWrapper>
                        <ProectingIcon />
                    </SC.WhatWeDoingItemIconWrapper>
                    <SC.WhatWeDoingItemText>
                        Проектирование систем электроосвещения, электрооборудования и электроснабжения
                    </SC.WhatWeDoingItemText>
                </SC.WhatWeDoingItem>

                <SC.WhatWeDoingDivider />

                <SC.WhatWeDoingItem>
                    <SC.WhatWeDoingItemIconWrapper>
                        <MontageIcon />
                    </SC.WhatWeDoingItemIconWrapper>
                    <SC.WhatWeDoingItemText>
                        Монтаж систем электроосвещения, электрооборудования и электроснабжения
                    </SC.WhatWeDoingItemText>
                </SC.WhatWeDoingItem>

                <SC.WhatWeDoingDivider />

                <SC.WhatWeDoingItem>
                    <SC.WhatWeDoingItemIconWrapper>
                        <AstronomyIcon />
                    </SC.WhatWeDoingItemIconWrapper>
                    <SC.WhatWeDoingItemText>
                        Проведение пусконаладочных работ и электроизмерений
                    </SC.WhatWeDoingItemText>
                </SC.WhatWeDoingItem>

                <SC.WhatWeDoingDivider />

                <SC.WhatWeDoingItem>
                    <SC.WhatWeDoingItemIconWrapper>
                        <ReconstructionIcon />
                    </SC.WhatWeDoingItemIconWrapper>
                    <SC.WhatWeDoingItemText>
                        Реконструкция и ремонт оборудования
                    </SC.WhatWeDoingItemText>
                </SC.WhatWeDoingItem>
            </SC.WhatWeDoingItems>
        </SC.Section>
    );
};

export default WhatWeDoing;
