import React, {useState} from 'react';

import Modal from "../../ui/Modal";
import MainLayout from "../../ui/Layouts/MainLayout";
import HeadSection from "./HeadSection";
import AboutSection from "./AboutSection";
import WhatWeDoing from "./WhatWeDoing";
import BigProjects from "./BigProjects";
import InfoSection from "./InfoSection";

const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <MainLayout>
            {/*{isModalOpen && (*/}
            {/*    <Modal onClose={handleCloseModal}>*/}
            {/*        Modal*/}
            {/*    </Modal>*/}
            {/*)}*/}

            <HeadSection />
            <AboutSection />
            <WhatWeDoing />
            <BigProjects />
            <InfoSection />
        </MainLayout>
    );
};

export default Index;
