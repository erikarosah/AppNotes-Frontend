import styled from 'styled-components';

export const Container = styled.div`
    width: fit-content;
    padding: .5rem 1.4rem;
    border-radius: 0.5rem;
    margin: 0 .5rem .5rem 0;

    font-size: 1.2rem;

    color: ${props => props.theme.COLORS.WHITE};
    background: ${props => props.theme.COLORS.YELLOW};
`;