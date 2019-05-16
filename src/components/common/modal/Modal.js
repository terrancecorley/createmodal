import React from 'react';
import styled from 'styled-components/macro';
import closeBtn from '../../../images/close-btn.svg';

function Modal(props) {
    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>Modal Title</ModalTitle>
                <ModalCloseBtn src={closeBtn} alt="Close modal button" />
            </ModalHeader>
            <ModalBody>

            </ModalBody>
            <ModalFooter>
                
            </ModalFooter>
        </ModalWrapper>
    );
}

export default Modal;

const ModalWrapper = styled.div`

`;

const ModalHeader = styled.div`

`;

const ModalTitle = styled.h2`

`;

const ModalCloseBtn = styled.img`

`;

const ModalBody = styled.div`

`;

const ModalFooter = styled.div`

`;