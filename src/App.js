import "./App.scss";

import { createHashRouter, HashRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/hero/hero";

import Projects from "./routes/projects/projects";
import Skills from "./routes/skills/skills";
import Career from "./routes/career/career";

const route = createHashRouter([
  {
    path: "/",
    element: <Hero />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={route} />
    // <HashRouter>
    // </HashRouter>
  );
}

export default App;
