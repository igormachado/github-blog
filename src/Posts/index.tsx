import { useState } from "react";
import { initialTodos } from "../Form";
import { NavLink, useParams } from "react-router-dom";
import {
  Article,
  FirstContent,
  Footer,
  FooterContent,
  PostContainer,
  PostContent,
  PostInfo,
  Title,
} from "./styles";
import {
  ArrowSquareUp,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";

export function Post() {
  const [lists, setLists] = useState(initialTodos);
  const params = useParams();

  return (
    <>
      {lists.map((list) => {
        if (params.id === list.id) {
          return (
            <>
              <PostContainer key={list.id}>
                <PostInfo>
                  <nav>
                    <NavLink to="/">
                      <p>
                        <CaretLeft /> VOLTAR
                      </p>
                    </NavLink>
                    <NavLink to="https://github.com/igormachado">
                      <p>
                        VER NO GITHUB <ArrowSquareUp />{" "}
                      </p>
                    </NavLink>
                  </nav>
                  <Title>{list.title}</Title>
                  <Footer>
                    <span>
                      <GithubLogo size={18} />
                      cameronwll
                    </span>
                    <span>
                      <CalendarBlank size={18} />
                      {list.timePublication}
                    </span>
                    <span>
                      <ChatCircle size={18} />5 comentários
                    </span>
                  </Footer>
                </PostInfo>
                <PostContent>
                  <Article>
                    <FirstContent>{list.publicationDescription}</FirstContent>
                  </Article>
                  <FooterContent>
                    <div>{list.codePublication}</div>
                  </FooterContent>
                </PostContent>
              </PostContainer>
            </>
          );
        }
      })}
    </>
  );
}
