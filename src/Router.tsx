import { Route, Routes } from "react-router-dom";
import { Form } from "./Form";
import { Post } from "./Posts";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Form />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/" element={<Post />} />
      </Route>
    </Routes>
  );
}
