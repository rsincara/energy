import React, {useState} from 'react';

import * as SC from './styles';
import Modal from "../../ui/Modal";
import MainLayout from "../../ui/Layouts/MainLayout";

const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = ()  => {
      setIsModalOpen(false);
    };

    return (
        <MainLayout>
            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    Modal
                </Modal>
            )}
        </MainLayout>
    );
};

export default Index;
