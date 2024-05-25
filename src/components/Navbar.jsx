import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState('hidden');
  console.log("Nav Loads..");
  function showNav() {
    show == 'hidden'? setShow('') : setShow('hidden');
  }

  return (
    <>
        <div className="flex mb-10">
            <Link
              to='/'
              className="text-3xl font-bold border-r pr-3 mr-5 border-black"
            >
              Agency
            </Link>
            <div className="my-auto">
              <button id="button" className="lg:hidden" onClick={showNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </button>
              <ul className="hidden lg:flex font-bold text-gray-600 ">
                <li className="pr-5">
                  <Link
                    to="/"
                    className="px-3 border border-white hover:border-purple-300 rounded py-2"
                  >
                    Home
                  </Link>
                </li>
                <li className="pr-5">
                  <Link
                    to="/services"
                    className="px-3 border border-white hover:border-purple-300 rounded py-2"
                  >
                    Services
                  </Link>
                </li>
                <li className="pr-5">
                  <Link
                    to="/blog"
                    className="px-3 border border-white hover:border-purple-300 rounded py-2"
                  >
                    Blog
                  </Link>
                </li>
                <li className="pr-5">
                  <Link
                    to="/portfolio"
                    className="px-3 border border-white hover:border-purple-300 rounded py-2"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="pr-5">
                  <Link
                    to="/contact"
                    className="px-3 border border-white hover:border-purple-300 rounded py-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="/quote"
              className="flex ml-auto font-bold text-white bg-red-500 hover:bg-red-600 shadow-sm shadow-slate-900 px-3 py-2 rounded-xl"
            >
              <span className="pr-1 hidden lg:block">Get a Quote</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </Link>
          </div>
          <div id='nav-links-mob' className={show}>
            <ul className="lg:hidden font-bold text-gray-600">
              <li className="mt-2 hover:text-black hover:underline ">
                <Link to="/" className="py-2">
                  Home
                </Link>
              </li>
              <li className="mt-2 hover:text-black hover:underline ">
                <Link to="/about" className="py-2">
                  About
                </Link>
              </li>
              <li className="mt-2 hover:text-black hover:underline ">
                <Link to="/services" className="py-2">
                  Services
                </Link>
              </li>
              <li className="mt-2 hover:text-black hover:underline ">
                <Link to="/portfolio" className="py-2">
                  Portfolio
                </Link>
              </li>
              <li className="mt-2 hover:text-black hover:underline ">
                <Link to="/contact" className="py-2">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
    </>
  )
}

export default Navbar