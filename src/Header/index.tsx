import { HeaderContainer, LogoHeaderContainer } from "./styles";
import Logogithub from "../assets/github-blog.svg";
import LogoTerminal from "../assets/logo-01.svg";
export function Header() {
  return (
    <HeaderContainer>
      <LogoHeaderContainer>
        <img src={LogoTerminal} />
        <img src={Logogithub} />
      </LogoHeaderContainer>
    </HeaderContainer>
  );
}
