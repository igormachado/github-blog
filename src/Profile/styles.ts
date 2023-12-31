import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  margin-top: calc(1rem - 5rem);
  margin-bottom: 4.5rem;
  border-radius: 10px;
  margin-left: 18rem;
  margin-right: 18rem;

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};
  display: flex;
  align-items: center;
`;

export const ProfileAvatar = styled.div`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  padding-left: 1rem;
  padding-bottom: 2rem;
`;

export const ProfileContent = styled.div`
  display: flex;
  margin-left: 2rem;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  img {
    padding-right: 2rem;
    gap: 8px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const ProfileDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 0.5rem;
`;

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 2rem;
  /* margin-left: 2rem; */
  align-items: center;

  a {
    text-decoration: none;
    align-items: center;
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
    line-height: 1.6;
    font-size: 1rem;
  }
`;
