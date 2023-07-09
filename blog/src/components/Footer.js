import React from 'react';
import styled from 'styled-components';
//모든 파일은 css 파일 이용하지 않고 styled-components 이용: 더 편할거같아서 했는데 코드가 매우 길어지는 단점이 있었음
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