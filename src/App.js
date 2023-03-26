// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthorizeUser } from "./authorization/auth";
import Loginpage from "./pages/Loginpage";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Registerpage from "./pages/Registerpage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Loginpage></Loginpage>,
//   },
//   {
//     path: "/register",
//     element: <Registerpage></Registerpage>,
//   },

//   {
//     path: "/profile",
//     element: <AuthorizeUser><Profile/></AuthorizeUser>
//   },
//   {
//     path: "/*",
//     element: <PageNotFound></PageNotFound>,
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}></Route>
        <Route path="/register" element={<Registerpage/>}></Route>
        <Route
          path="/profile"
          element={
            <AuthorizeUser>
              <Profile />
            </AuthorizeUser>
          }
        ></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
