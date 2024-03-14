import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full flex justify-between py-5 px-20 bg-slate-900/50 backdrop-blur-xl fixed top-0 right-0 left-0">
      <h1 className="text-2xl font-semibold text-white">Burger Queen</h1>
      <ul className="flex space-x-4 text-white">
        <li>
          <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-white hover:text-indigo-500"
                : isActive
                ? "text-indigo-500"
                : ""
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-white hover:text-indigo-500"
                : isActive
                ? "text-indigo-500"
                : ""
            }
          >
            Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-white hover:text-indigo-500"
                : isActive
                ? "text-indigo-500"
                : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-white hover:text-indigo-500"
                : isActive
                ? "text-indigo-500"
                : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
