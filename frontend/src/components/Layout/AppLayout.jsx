import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";


export default function AppLayout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}