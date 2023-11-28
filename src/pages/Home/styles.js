import styled from 'styled-components';

export const Container = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > fieldset{
        width: 80vw;
    }
`;

export const Filter = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   max-width: 80vw;

   color: ${props => props.theme.COLORS.FONT_COLOR};
`;
