import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 15rem;
    border: .1rem solid ${props => props.theme.COLORS.BORDER};
    resize: none;
    margin: .8rem 0;
    border-radius: .5em;
    padding: 1rem;

    background-color: ${props => props.theme.COLORS.BACKGROUND};
    color: ${props => props.theme.COLORS.FONT_COLOR};

    &::placeholder{
        color: ${props => props.theme.COLORS.FONT_COLOR};
    }
`;