import { styled } from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1rem 0;
    
    > div:last-child {
        display: flex;
        justify-content: center;
        gap: 1rem;

        > a img{
            width: 2rem;
        }
    }
`;