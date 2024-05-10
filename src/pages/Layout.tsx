import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";


export const Layout = () => (
    <>
      <Header />
      <Outlet />
    </>
);