import styled from "styled-components";

export const FormContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  margin-bottom: 4.5rem;
  margin-left: 18rem;
  margin-right: 18rem;
`;

export const FormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const InputSearchForm = styled.input`
  display: flex;
  width: 54rem;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-border"]};
  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 1rem;

  cursor: pointer;
`;

export const FormContentMain = styled.main`
  width: 416px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 10px;
  display: flex;
  margin-top: 20px;
  left: 50%;
  transform: translate(15%);

`;

export const PostContentForm = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 50px;

  align-items: center;


  h3 {
    display: flex;
    width: 283px;
    height: 64px;
    font-size: 20px;
    align-items: center;
    text-align: center;
    font-weight: 700;
    line-height: 1.6;
    color: ${(props) => props.theme["base-title"]};
  }
  
  p {
   width: 352px;
   height: 112px;
   display: flex;
   overflow: hidden;
    background: ${(props) => props.theme["base-post"]};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
   
    align-items: center;
    text-align: center;

  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme["base-text"]};

  }
`;

export const ButtonSelectPost = styled.button`
  text-decoration: none;
  border: none;
  color: ${(props) => props.theme["base-text"]};
  background: ${(props) => props.theme["base-post"]};
`;
