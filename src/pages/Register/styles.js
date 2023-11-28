import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span, h1{
        color: ${props => props.theme.COLORS.FONT_COLOR}
    }

    > h1{
        margin-top: 2rem;
    }

    > form button{
        height: 3.5rem;
    }
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    border: .1rem solid #000;
    margin: 1rem 0;

    > span{
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem;  
        color: ${props => props.theme.COLORS.WHITE}
    }

    > h1{
        padding: 1rem;

        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: .5rem;

        background-color: #000;
        color:${props => props.theme.COLORS.FONT_COLOR}
    }
`;