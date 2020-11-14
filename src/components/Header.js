import React from 'react';
import styled from '@emotion/styled'

const HeaderContainer = styled.header`
    background-color: #00B69D;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF
`;
const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <HeaderContainer>
            <TextoHeader>{titulo}</TextoHeader>
        </HeaderContainer>
     );
}
 
export default Header;