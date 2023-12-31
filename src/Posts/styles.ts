import styled from "styled-components";

export const PostContainer = styled.div`
  width: 1200px;
  height: 926px;
  background: ${(props) => props.theme["base-background"]};
  left: 20%;
  position: absolute;
`;

export const PostInfo = styled.header`
  width: 864px;
  height: 168px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px;

  nav {
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 20px 32px;

    p {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme["blue"]};
    }
  }
`;

export const Title = styled.p`
  display: flex;
  width: 800px;
  color: ${(props) => props.theme["base-title"]};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  padding: 2px 8px 32px 32px;
`;

export const Footer = styled.footer`
  display: inline-flex;
  align-items: center;

  gap: 32px;
  padding-left: 32px;
  margin-bottom: 20px;
  color: ${(props) => props.theme["base-span"]};

  span {
    display: flex;
    justify-content: baseline;
    gap: 4px;
  }
`;

export const PostContent = styled.main`
  display: flex;
  width: 864px;
  padding: 40px 32px;
  flex-direction: column;
  align-items: center;
  gap: 24px;

`;

export const Article = styled.article`
  align-self: stretch;
  color: ${(props) => props.theme["base-text"]};
  font-size: 16px;
  line-height: 1.6;

`;

export const FirstContent = styled.p`
  font-weight: 400;
  margin-bottom: 20px;

`

export const SecondContent = styled.p`
  strong {
    color: ${(props) => props.theme["blue"]};
    text-decoration-line: underline;
  }

  font-weight: 400;

`

export const FooterContent = styled.footer`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 2px;
  
  background: ${(props) => props.theme["base-post"]};

  div {
    color: red;
  }

`
