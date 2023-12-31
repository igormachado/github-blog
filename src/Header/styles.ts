import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: auto;
  height: 230px;
  flex-shrink: 0;
  background: ${(props) => props.theme["base-profile"]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoHeaderContainer = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1rem;
`;
