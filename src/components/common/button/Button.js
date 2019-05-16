import React from 'react';
import styled, { css } from 'styled-components';

function Button(props) {
    return (
        <ButtonComponent
            className={props.className}
            secondary={props.secondary}
        >
            {props.children}
        </ButtonComponent>
    )
}

export default Button;

const ButtonComponent = styled.button`
    color: #FFF;
    border-radius: 0.25rem;
    background-color: #007BFF;
    border: 1px solid #007BFF;
    box-shadow: 0;
    font-size: 3em;

    &:hover {
        background-color: #0069D9;
        border: 1px solid #0062CC;
        transition: background-color 0.2s ease-out,
                    border 0.2s ease-out;
    }

    /* Secondary button styles */
    ${props => props.secondary && css`
        background-color: #6C757D;
        border: 1px solid #6C757D;

        &:hover {
            background-color: #5A6268;
            border: 1px solid #545B62;
        }
    `}
`;