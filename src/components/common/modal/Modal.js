import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import closeBtn from '../../../images/close-btn.svg';

function Modal(props) {
    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>Modal Title</ModalTitle>
                <CloseBtn src={closeBtn} alt="Close modal button" />
            </ModalHeader>
            <ModalBody>
                {/* Props.children should be a form element */}
                {/* {props.children} */}
                <form action="POST">
                    <input name="username" id="username" placeholder="Enter a username" />
                    <input name="password" id="password" placeholder="Enter a password" />
                </form>
                <ModalButtons>
                    <CancelBtn secondary>Cancel</CancelBtn>
                    <SaveBtn>Save</SaveBtn>
                </ModalButtons>
            </ModalBody>
        </ModalWrapper>
    );
}

export default Modal;

const ModalWrapper = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
`;

const ModalTitle = styled.h2`

`;

const CloseBtn = styled.img`

`;

const ModalBody = styled.div`

`;

const ModalButtons = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
`;

const CancelBtn = styled(Button)`
    margin-right: 0.5em;
`;

const SaveBtn = styled(Button)`
`;