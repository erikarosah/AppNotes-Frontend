import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    height: auto;
    margin: 1rem;
    padding: 2rem;
    border-radius: .5rem;
    border: .1rem solid #575a5f;
    display: grid;
    gap: 1.6rem;

    font-size: 1.3rem;
    font-weight: 400;

    cursor: pointer;

    transition: transform 0.2s;

    &:hover{
        transform: scale(1.01);
    }

    > h1{
        font-size: 1.5rem;
        color: ${props => props.theme.COLORS.FONT_COLOR};
    }
    
    > footer{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 2.4rem;
    }
`;