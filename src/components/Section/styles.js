import styled from 'styled-components';

export const Container = styled.section`
    margin: 2rem 1rem;

    > h2{
        padding-bottom: 1rem;

        text-transform: uppercase;
        font-size: 1.3rem;
        font-weight: 400;
        
        color: ${props => props.theme.COLORS.FONT_COLOR};
    }
`;