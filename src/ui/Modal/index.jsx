import React, {useEffect, useRef} from 'react';

import * as SC from './styles';
import Portal from "../Portal";

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
            document.body.style.overflowY = 'auto';
        }, 500);
    };

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
    }, []);

    return (
        <Portal>
            <SC.Overlay ref={overlayRef} onClick={handleClose} />
            <SC.ModalWrapper ref={modalWrapperRef}>
                <SC.Background />
                <SC.Modal>
                    {children}
                </SC.Modal>
            </SC.ModalWrapper>
        </Portal>
    );
};

export default Modal;
