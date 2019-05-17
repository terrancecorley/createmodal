import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import closeBtn from '../../../images/close-btn.svg';

function Modal(props) {
    return (
        <>
            <Overlay></Overlay>
            <ModalWrapper>
                <ModalHeader>
                    <ModalTitle>Modal Title</ModalTitle>
                    <CloseBtn src={closeBtn} alt="Close modal button" />
                </ModalHeader>
                <ModalBody>
                    {/* Props.children should be a form element */}
                    {/* {props.children} */}
                    <form action="POST">
                        <ModalInput name="username" id="username" placeholder="Enter a username" />
                        <ModalInput name="password" id="password" placeholder="Enter a password" />
                    </form>
                    <ModalButtons>
                        <CancelBtn secondary>Cancel</CancelBtn>
                        <SaveBtn>Save</SaveBtn>
                    </ModalButtons>
                </ModalBody>
            </ModalWrapper>
        </>
    );
}

export default Modal;

const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
`;

const ModalWrapper = styled.div`
    border: 1px solid skyblue;
    border-radius: 0.3rem;
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
    z-index: 1000;
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
    padding: 1em;
`;

const ModalInput = styled.input`
    &:first-of-type {
        margin-right: 1em;
    }

    border: none;
    border-radius: 0.25rem;
    padding: 0.4em;
`;

const ModalButtons = styled.div`
    display: flex;
    justify-content: center;
    padding: 1em;
    margin-top: 1em;
`;

const CancelBtn = styled(Button)`
    margin-right: 0.5em;
`;

const SaveBtn = styled(Button)`
`;