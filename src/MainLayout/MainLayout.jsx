import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";




export default function MainLayout() {
  return (
    <>
      <div>
      <Navbar />
        <div className="min-h-[calc(100vh-348px)] ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
