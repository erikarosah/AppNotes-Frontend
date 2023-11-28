import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;

    > button{
        z-index: 2;
        margin: 1rem 2rem 0 2rem;
    }

    &::before{
        content:'';
        width: 100%;
        height: 12rem;
        position: absolute;

        background-color: ${props => props.theme.COLORS.BACKGROUND_200};
    }
`;

export const Content = styled.div`
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    > form input{
        font-size: 1.3rem;
    }
`;

export const Image = styled.div`
    width: fit-content;
    position: relative;

    > img{
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
    }

    > label{
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: .5rem;
        right: .8rem;

        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        
        background-color: ${props => props.theme.COLORS.BORDER};

        > svg{
            fill: ${props => props.theme.COLORS.WHITE};
            position: absolute;

        }

        > input{
            opacity: 0;
            cursor: pointer;
        }
    }
`;