import React, { useEffect } from "react";
import { useState } from "react";
import { FaFont } from "react-icons/fa";
import Imgg from "../assets/react.svg";
import Pic from "../assets/audi.svg";
import "animate.css";
import { CiSearch } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { Car } from "./Car";
import { useRef } from "react";
import "../assets/Carousel.css";

const Nav = () => {
  const [icon, setIcon] = useState(false);
  const [menu, setMenu] = useState(false);
  const [image, setImage] = useState(Pic);
  const [on, setOn] = useState("");
  const [men, setMen] = useState(false);
  const [position, setPosition] = useState({
    company: "0%",
    innovation: "0%",
    sustainability: "0%",
    careers: "0%",
    audi: "0%",
  });
  const company = useRef(null);
  const innovation = useRef(null);
  const sustainability = useRef(null);
  const careers = useRef(null);
  const audi = useRef(null);
  let calc;
  let innoCalc;
  let calcc;
  let careerCalc;
  let audiCalc;

  return (
    <>
      <nav
        class=" relative navv bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900"
        style={{ fontFamily: "Open Sans" }}
      >
        <div class="flex flex-wrap justify-between items-center w-full p-4">
          <div
            id="mega-menu-full"
            class="flex items-center justify-between w-full"
          >
            <ul class="flex justify-between w-full items-center mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li
                className="flex"
                style={{
                  fontSize: "25px",
                  width: "55%",
                }}
              >
                <div className="flex items-center" style={{ width: "80%" }}>
                  <button
                    onClick={() => {
                      setMenu(!menu), setMen(false);
                    }}
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="mega-menu-full-dropdown"
                    class="flex items-center transition duration-700 ease-in-out justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <RxHamburgerMenu
                      class="animate__animated animate__fadeIn animate__slow"
                      style={{ display: menu ? "none" : "block" }}
                    />
                    <LiaTimesSolid
                      class="animate__animated animate__fadeIn animate__slow"
                      style={{ display: !menu ? "none" : "block" }}
                    />{" "}
                    <span style={{ width: "4px" }}></span>
                  </button>
                  <Car
                    icon={icon}
                    setIcon={setIcon}
                    company={position.company}
                    innovation={position.innovation}
                    sustainability={position.sustainability}
                    careers={position.careers}
                    audi={position.audi}
                    on={on}
                  />
                </div>
                <img src={Pic} alt="logo" class="ima w-40 h-14 lg:mr-2" />
              </li>

              <li>
                <div class="flex flex-wrap items-center justify-between gap-4 w-full ">
                  <div class="flex items-center marginLeft-auto space-x-6">
                    <button
                      onClick={() => {
                        setMen(!men), setMenu(false);
                      }}
                      id="mega-menu-full-dropdown-button"
                      data-collapse-toggle="mega-menu-full-dropdow"
                      class="font-semibold text-[15px]  border-none outline-none w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      <a
                        href="javascript:void(0)"
                        class="text-[#007bff] hover:underline"
                      >
                        <CiSearch
                          style={{
                            fontSize: "30px",
                            color: "black",
                            fontWeight: 100,
                          }}
                        />
                      </a>
                    </button>
                    <button class="par  px-4  py-2 text-sm rounded-sm font-bold text-black  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ">
                      <CiGlobe style={{ fontSize: "30px" }} />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className=" absolute w-full z-10"
          style={{
            borderRight: "2px solid rgba(128, 128, 128, 0.5)",
            borderLeft: "2px solid rgba(128, 128, 128, 0.5)",
            display: !menu ? "none" : "block",
            borderTop: "2px solid rgba(128, 128, 128, 0.5)",
          }}
          id="mega-menu-full-dropdown"
          class="mine animate__animated animate__fadeInDown mt-0 bg-white  border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600  hidden"
        >
          <nav class="top bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
              <div class=" w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-x-0 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li
                    ref={company}
                    onMouseEnter={() => {
                      setIcon(true);
                      setOn("company");
                      if (company.current) {
                        calc = company.current.getBoundingClientRect();
                        console.log(calc);
                      }
                      if (calc) {
                        let newX = calc.x - 25;
                        console.log(newX);
                        setPosition({ ...position, company: `${newX}px` });
                      }
                    }}
                    onMouseLeave={() => {
                      setIcon(false);
                      setOn("");
                      setPosition({ ...position, company: "0px" });
                    }}
                  >
                    <a
                      href="#"
                      class="block py-2 px-3 relative  overflow-hidden group text-black-500 transition-all duration-300 ease-in-out
 text-black text-start pb-5 pt-5 
 rounded md:bg-transparent md:text-black  md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {" "}
                      <span class="z-10 bg-[length:${position} 2px] bg-left-bottom text-lg   hover:text-shadow-black bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Company
                      </span>
                    </a>
                  </li>
                  <li
                    ref={innovation}
                    onMouseEnter={() => {
                      setIcon(true);
                      setOn("innovation");
                      if (innovation.current) {
                        innoCalc = innovation.current.getBoundingClientRect();
                        console.log("calc:", innoCalc);
                        if (innoCalc) {
                          let innoCalcML = innoCalc.x - 25;
                          console.log("new:", innoCalcML);
                          setPosition({
                            ...position,
                            innovation: `${innoCalcML}px`,
                          });
                          console.log(position.innovation);
                        }
                      }
                    }}
                    onMouseLeave={() => {
                      setOn("");
                      setIcon(false);
                      setPosition({
                        ...position,
                        innovation: `0px`,
                      });
                    }}
                  >
                    <a
                      href="#"
                      class="block py-2 px-3 relative overflow-hidden group text-black-500 transition-all duration-300 ease-in-out
 text-black text-start pb-5 pt-5 
 rounded md:bg-transparent md:text-black  md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {" "}
                      <span class="bg-left-bottom text-lg  hover:text-shadow-black bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Innovation
                      </span>
                    </a>
                  </li>
                  <li
                    ref={sustainability}
                    onMouseEnter={() => {
                      setIcon(true);
                      setOn("sustainability");
                      if (sustainability.current) {
                        calcc = sustainability.current.getBoundingClientRect();
                        console.log(calcc);
                      }
                      if (calcc) {
                        let newXX = calcc.x - 10;
                        console.log(newXX);
                        setPosition({
                          ...position,
                          sustainability: `${newXX}px`,
                        });
                      }
                    }}
                    onMouseLeave={() => {
                      setOn("");
                      setIcon(false);
                      setPosition({ ...position, sustainability: "0px" });
                    }}
                  >
                    <a
                      href="#"
                      class="block py-2 px-3 relative overflow-hidden  group text-black-500 transition-all duration-300 ease-in-out
 text-black text-start pb-5 pt-5 
 rounded md:bg-transparent md:text-black  md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {" "}
                      <span class="bg-left-bottom text-lg  hover:text-shadow-black bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Sustainability
                      </span>
                    </a>
                  </li>
                  <li
                    ref={careers}
                    onMouseEnter={() => {
                      setOn("careers");
                      setIcon(true);
                      if (careers.current) {
                        careerCalc = careers.current.getBoundingClientRect();
                      }
                      if (careerCalc) {
                        let newCareermargin = careerCalc.x - 32;
                        setPosition({
                          ...position,
                          careers: `${newCareermargin}px`,
                        });
                      }
                    }}
                    onMouseLeave={() => {
                      setPosition({ ...position, careers: "0px" });
                      setIcon(false);
                    }}
                  >
                    <a
                      href="#"
                      class="block py-2 px-3 relative overflow-hidden  group text-black-500 transition-all duration-300 ease-in-out
 text-black text-start pb-5 pt-5 
 rounded md:bg-transparent md:text-black  md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {" "}
                      <span class="bg-left-bottom text-lg  hover:text-shadow-black bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Careers
                      </span>
                    </a>
                  </li>
                  <li
                    ref={audi}
                    onMouseEnter={() => {
                      setOn("audi");
                      setIcon(true);
                      if (audi.current) {
                        audiCalc = audi.current.getBoundingClientRect();
                      }
                      if (audiCalc) {
                        let newAudiMargin = audiCalc.x - 17;
                        setPosition({
                          ...position,
                          audi: `${newAudiMargin}px`,
                        });
                      }
                    }}
                    onMouseLeave={() => {
                      setPosition({ ...position, audi: "0px" });
                      setIcon(false);
                    }}
                  >
                    <a
                      href="#"
                      class="block py-2 px-3 relative overflow-hidden  group text-black-500 transition-all duration-300 ease-in-out
 text-black text-start pb-5 pt-5 
 rounded md:bg-transparent md:text-black  md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      {" "}
                      <span class="bg-left-bottom text-lg  hover:text-shadow-black bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Audi in Sport
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div
          style={{
            display: men ? "block" : "none",
            border: "none",
            borderBottom: "black",
          }}
          id="mega-menu-full-dropdow"
          class="animate__animated animate__fadeInDown  animate__faster mt-0 bg-white border-gray-200  border-y dark:bg-gray-800 dark:border-gray-600  hidden"
        >
          <div class="relative flex">
            <input
              style={{ borderBottom: "2px solid black" }}
              type="search"
              class="relative m-0 block flex-auto  border-0 border-solid border-b-black border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
              placeholder="Enter Search Term"
              aria-label="Search"
              id="exampleFormControlInput2"
              aria-describedby="button-addon2"
            />
            <span
              style={{ borderBottom: "2px solid black" }}
              class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
              id="button-addon2"
            >
              <svg
                xmarginLeftns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
