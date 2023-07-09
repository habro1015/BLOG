import React from 'react';
import styled from 'styled-components';
const FooterWrapper = styled.footer`
background-color: #f5f5f5;
color: #333;
padding: 30px;
text-align: left;
position: fixed;
bottom: 0px;
width: 100%;
`;
const FooterText = styled.p`
  font-size: 25px;
  margin: 0;
`;

function Footer () {
  return (
  <FooterWrapper>
    <FooterText>Footer</FooterText>
 </FooterWrapper>
  );
};

export default Footer;