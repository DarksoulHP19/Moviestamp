import React from "react";
import { TbSunFilled } from "react-icons/tb";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/";

export default function Navbar() {
  const {toggleTheme} = useTheme() ;

  return (
    <div className="bg-secondary drop-shadow-sm shadow-gray-500">
      <Container className=" p-2" >
        <div className="flex justify-between items-center ">
          <Link to='/'>
          <img src="./navlogo.jpeg" alt="scaas" className=" h-10" />
          </Link>

          <ul className="flex items-center space-x-4">
            <button  onClick={toggleTheme} className="dark:bg-dark-subtle bg-primary p-1 rounded">
              <li>
                <TbSunFilled className="text-secondary size={24}" />
              </li>
            </button>
              <li>
                <input type="text" className="border-2 border-dark-subtle p-1  rounded bg-transparent text-xl outline-none focus:border-white
                transition text-cyan-500"placeholder="search.." ></input>
              </li>
              <li>
                <Link to='/auth/signin'  className="text-white font-semibold text-lg">
                Login
                </Link>
                 </li>
          </ul>
        </div>
      </Container>
      </div>


  );
}
