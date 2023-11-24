import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import UseCarts from "../../Components/Hooks/UseCarts";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCarts();


  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/">HOME</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/menu">Menu</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/contactUs">CONTACT US</NavLink>{" "}
      </li>
      {/* <li>
        {" "}
        <NavLink to="/dashboard">DASHBOARD</NavLink>{" "}
      </li> */}
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/">OUR SHOP</NavLink>{" "}
      </li>

      <li>
        <Link to="/dashboard/cart">
          <button className="btn-sm flex items-center gap-3">
            <FaShoppingCart className="text-xl"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>{" "}
      </li>
      {user ? (
        <>
          {/* <span> {user?.displayName}</span> */}
          <button onClick={handleLogout} className="btn btn-ghost">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            {" "}
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 text-white bg-opacity-30 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <a className="btn">LOGIN</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
