import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
  const location = useLocation();
  console.log(location);

  const noHeaderFooter =location.pathname.includes('login') || location.pathname.includes('signUp')
  return (
    <div>
     {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
     {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
