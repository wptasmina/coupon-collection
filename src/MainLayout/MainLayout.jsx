import Header from "../pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Here is your toast.");


export default function MainLayout() {
  return (
    <>
      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
