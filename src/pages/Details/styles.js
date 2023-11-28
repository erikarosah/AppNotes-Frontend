import styled from 'styled-components';

export const Container = styled.div`
    > main{
        min-height: 80vh;
        padding: 0 1rem;
        display: flex;
        align-items: center;
    }
`;

export const Links = styled.ul`
    > li{
        > a {
            text-decoration: underline;
            font-size: 1.2rem;

            color: ${props => props.theme.COLORS.FONT_COLOR};

            &:hover{
                color: ${props => props.theme.COLORS.WHITE};
            }
        }
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    margin: 1rem auto;

    > div {
        display: flex;
        justify-content: space-between;
    }

    > h1{
        padding: 2.5rem 0 0 1rem;

        font-size: 1.8rem;
        font-weight: bold;

        color: ${props => props.theme.COLORS.FONT_COLOR};
    }
    
    > p{
        margin: 2rem 0;
        padding: 2.5rem 1rem 0 1rem;

        font-size: 1.3rem;
        text-align: justify;
        
        color: ${props => props.theme.COLORS.FONT_COLOR};
    }
`;