import * as React from "react";
import styled from "styled-components";
import ContentWrapper from "./contentWrapper";

const Footer = () => {
  return (
    <FooterContent>
      <ContentWrapper>
        <FooterInner>
          <div>
            <a href="https://github.com/ktnkk/blog" target="_blank" rel="noopener noreferrer">
              SourceCode
            </a>
          </div>
          <div>© {new Date().getFullYear()}, ktnkk.log</div>
        </FooterInner>
      </ContentWrapper>
    </FooterContent>
  );
};

const FooterContent = styled.footer`
  padding: 0.1em 0;
`;

const FooterInner = styled.div`
  margin-top: 3em;
  text-align: center;
  padding: 1.5em;
  border-top: solid 1px ${props => props.theme.colors.blackLight};
  color: ${props => props.theme.colors.gray};
  font-size: 14px;

  a {
    color: ${props => props.theme.colors.gray};
    text-decoration: underline;
  }
`;

export default Footer;
