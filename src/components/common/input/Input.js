import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid lightskyblue;
    border-radius: 0.25rem;
    padding: 0.4em;

    &:focus {
        outline: none;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    }
`;

export default Input;