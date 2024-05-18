import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const cartItems = useSelector((store) => store.cart.cart);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2 space-x-4">
            <Link to="/cart" className="text-xl">
              <span className="hover:text-gray-300">
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span>({cartItems?.length})</span>
            </Link>
            <Link
              to={isAuthenticated ? "#" : "/login"}
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={isAuthenticated ? logout : null}
            >
              {isAuthenticated ? "Sign Out" : "Sign In"}
            </Link>
          </div>
          {isAuthenticated && (
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive
                          ? "text-red-500 font-bold"
                          : "text-gray-800 font-bold"
                      }`
                    }
                  >
                    All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/electronics"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive
                          ? "text-red-500 font-bold"
                          : "text-gray-800 font-bold"
                      }`
                    }
                  >
                    Electronics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/jewelry"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive
                          ? "text-red-500 font-bold"
                          : "text-gray-800 font-bold"
                      }`
                    }
                  >
                    Jewelry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/men"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive
                          ? "text-red-500 font-bold"
                          : "text-gray-800 font-bold"
                      }`
                    }
                  >
                    Men's Clothing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/women"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive
                          ? "text-red-500 font-bold"
                          : "text-gray-800 font-bold"
                      }`
                    }
                  >
                    Women's Clothing
                  </NavLink>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                            isActive
                              ? "text-red-500 font-bold"
                              : "text-gray-800 font-bold"
                          }`
                        }
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/orders"
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                            isActive
                              ? "text-red-500 font-bold"
                              : "text-gray-800 font-bold"
                          }`
                        }
                      >
                        Orders
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
