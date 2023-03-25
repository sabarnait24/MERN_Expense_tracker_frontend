// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthorizeUser } from "./authorization/auth";
import Loginpage from "./pages/Loginpage";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Registerpage from "./pages/Registerpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage></Loginpage>,
  },
  {
    path: "/register",
    element: <Registerpage></Registerpage>,
  },

  {
    path: "/profile",
    element: <AuthorizeUser><Profile/></AuthorizeUser>
  },
  {
    path: "/*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
