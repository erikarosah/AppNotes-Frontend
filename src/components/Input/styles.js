import styled from 'styled-components';

export const Container = styled.fieldset`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    border: none;
    border: .1rem solid ${props => props.theme.COLORS.BORDER};
    border-radius: .5rem;
    padding: 1rem;

    font-weight: 400;
    font-size: 1.3rem;

    > input{
        width: 100%;
        border: none;

        background: none;
        color: ${props => props.theme.COLORS.FONT_COLOR};

        &::placeholder{
            color: ${props => props.theme.COLORS.FONT_COLOR};   
        }
    }

    > svg{
        font-size: 1.5rem;
        fill: ${props => props.theme.COLORS.BORDER};
    }
`;