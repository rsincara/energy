import React, { useRef } from 'react';

import * as SC from './styles';

const Modal = ({
    children,
    onClose,
}) => {
    const overlayRef = useRef(null);
    const modalWrapperRef = useRef(null);

    const handleClose = () => {
        overlayRef.current.style.opacity = 0;
        modalWrapperRef.current.style.opacity = 0;

        setTimeout(() => {
            onClose();
        }, 500);
    };

    return (
        <>
            <SC.Overlay ref={overlayRef} onClick={handleClose} />
            <SC.ModalWrapper ref={modalWrapperRef}>
                <SC.Modal>
                    {children}
                </SC.Modal>
            </SC.ModalWrapper>
        </>
    );
};

export default Modal;
