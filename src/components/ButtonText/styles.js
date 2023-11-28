import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    padding: 1rem;

    font-size: 1.2rem;
    
    cursor: pointer;

    background: none;
    color: ${({ theme, isActive}) => isActive? theme.COLORS.FONT_COLOR : theme.COLORS.BORDER};
`;