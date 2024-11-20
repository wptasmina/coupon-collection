import Header from "../pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";




export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
