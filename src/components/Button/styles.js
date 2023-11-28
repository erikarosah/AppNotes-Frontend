import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 3.5rem;
    border: 0;
    margin-top: 1.6rem;
    border-radius: 0.5rem;
    gap: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.3rem;

    color: ${ props => props.theme.COLORS.FONT_COLOR};
    background-color: ${props => props.theme.COLORS.BUTTON};
  
    &:disabled {
        opacity: 0.5;
    }
`;