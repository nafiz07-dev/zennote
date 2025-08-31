import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Main from "./Main";

function Home() {
  return (
    <div>
      <div>
        <Outlet />
        <Navbar />
        <Main />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
