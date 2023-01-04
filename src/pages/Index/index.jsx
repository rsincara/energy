import React, {useState} from 'react';

import * as SC from './styles';
import Modal from "../../ui/Modal";

const Index = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = ()  => {
      setIsModalOpen(false);
    };

    return (
        <div>
            index

            {isModalOpen && (
                <Modal onClose={handleCloseModal}>
                    Modal
                </Modal>
            )}
        </div>
    );
};

export default Index;
