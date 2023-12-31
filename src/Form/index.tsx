/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from "react-router-dom";
import { Profile } from "../Profile";
import {
  FormContainer,
  FormContentMain,
  FormHeader,
  InputSearchForm,
  PostContentForm,
} from "./styles";
import { useState } from "react";

export const initialTodos = [
  {
    id: "1",

    title: "JavaScript data types and data structures",
    timePublication: "Há 4 dia",
    publicationDescription:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:",
    codePublication:
      "let foo = 42; // foo is now a number"
  },
  {
    id: "2",

    title: "Rust types and data structures",
    timePublication: "Há 5 dia",
    publicationDescription:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:",
    codePublication:
      "let foo = 42; // foo is now a number foo = 'bar';"
  },
  {
    id: "3",

    title: "C# Sharp data types and data structures",
    timePublication: "Há 6 dia",
    publicationDescription:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:",
    codePublication:
      "let foo = 42; // foo is now a number",
  },
  {
    id: "4",

    title: "kotlin data types and data structures",
    timePublication: "Há 7 dia",
    publicationDescription:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:",
    codePublication:
      "let foo = 42; // foo is now a number",
  },
  {
    id: "5",
    title: "C++ data types and data structures",
    timePublication: "Há 8 dia",
    publicationDescription:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:",
    codePublication:
      "let foo = 42; // foo is now a number",
  },
  {
    id: "6",
    title: "Python data types and data structures",
    timePublication: "Há 8 dia",
    publicationDescription:
      "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:",
    codePublication:
      "let foo = 42; // foo is now a number",
  },
];

export function Form() {
  const [publications, setPublications] = useState(initialTodos);
  const [searchPublication, setSearchPublications] = useState("");

  const howManyPublicationsAre = publications.length;

  howManyPublicationsAre !== 0 ? howManyPublicationsAre : 0;

  const filterPublication = publications.filter((item) =>
    item.title.toLowerCase().includes(searchPublication.toLowerCase())
  );

  function handleSearchPublication(event: React.ChangeEvent<HTMLInputElement>) {
    const isInputValueEmpty = event.target.value;
    event.preventDefault();
    setSearchPublications(isInputValueEmpty);

    if (filterPublication) {
      setPublications(filterPublication);
    }
  }

  return (
    <>
      <Profile />
      <FormContainer>
        <form>
          <FormHeader>
            <span>Publicações</span>
            <span>{howManyPublicationsAre} publicações</span>
          </FormHeader>
          <InputSearchForm
            type="text"
            placeholder="Buscar conteúdo"
            value={searchPublication}
            onChange={handleSearchPublication}
          />
          <FormContentMain>
            <PostContentForm>
              {publications.map((item) => (
                <NavLink to={`/posts/${item.id}`}>
                  <h3 key={item.id}>{item.title}</h3>
                  <p>{item.publicationDescription}</p>
                </NavLink>
              ))}
            </PostContentForm>
          </FormContentMain>
        </form>
      </FormContainer>
    </>
  );
}
