import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .8rem;
    border: ${({theme, isNew}) => isNew ? `.2rem dashed ${theme.COLORS.BORDER}` : `.1rem solid ${theme.COLORS.BORDER}`};
    border-radius: .5rem;
    padding: 0 .2rem;

    cursor: pointer;

    > button{
        border: none;
        background: none;
        color: ${props => props.theme.COLORS.FONT_COLOR};

        > svg{
            font-size: 1.4rem;
        }
    }

    .button-delete {
        color: red;
    }

    .button-add {
        color: green;
    }
    > input{
        height: 5.6rem;
        width: 100%;
        padding: 1.2rem;
        color: ${props => props.theme.COLORS.FONT_COLOR};
        background: transparent;
        border: none;

        &::placeholder{
            color: ${props => props.theme.COLORS.FONT_COLOR};
        }
    }
`;