import Nav from "./Components/Nav";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Resource from "./Components/Resource";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Home />
        </>
      ),
    },
    {
      path: "/resource",
      element: (
        <>
          <Nav />
          <Resource />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Nav />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Nav />
          <Contact />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Nav />
          <Home />
        </>
      ),
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
