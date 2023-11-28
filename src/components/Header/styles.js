import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    height: 10rem;
    padding: 0 2rem;
    border-bottom: .1rem solid #575a5f;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > a{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        font-size: 1.3rem;
        text-decoration: none;
        
        cursor: pointer;

        color: ${props => props.theme.COLORS.WHITE};

        > svg{
            font-size: 1.3rem;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    > img{
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;
        margin-left: 1.6rem;
        line-height: 2.4rem;

        span{
            font-size: 1.3rem;
            color:${props => props.theme.COLORS.FONT_COLOR} ;
        }

        strong{
            font-size: 1.5rem;
            color: ${props => props.theme.COLORS.WHITE};
        }
    }
`;