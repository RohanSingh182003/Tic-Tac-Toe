import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Layout from './components/layouts/Layout'
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import AddUser from "./components/main/AddUser";
import Dashboard from "./components/main/dashboard/Dashboard";
import Gameboard from "./components/main/gameboard/Gameboard";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="login" element={<Layout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route index element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="main" element={<Layout />}>
          <Route index element={<Gameboard />} />
          <Route path="adduser" element={<AddUser />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
