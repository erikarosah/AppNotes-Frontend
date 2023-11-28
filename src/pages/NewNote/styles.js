import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    > main{
        width: 80vw;
    }

    .tags{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;

        > div{
            width: 100%;
        }
    }
`;

export const Form = styled.form`
    max-width: 55rem;
    margin: 3.8rem auto;

    > header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.6rem;

        > h1{
            font-size: 1.8rem;
            color: ${props => props.theme.COLORS.FONT_COLOR};
        }

        > a {
            font-size: 1.2rem;
            text-decoration: none;
            color: ${props => props.theme.COLORS.FONT_COLOR};
        }
    }
`;