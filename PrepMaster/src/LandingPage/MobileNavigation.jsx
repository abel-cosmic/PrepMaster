import React, { useState } from 'react';
import logo from "./../assets/logo.svg";
import top from "./../assets/Top-Menu.svg";
import active from "./../assets/active-Top-Menu.svg";
import CustomButton from "../Components/CustomButton";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";

export function MobileNavigation() {
    const [isActive, setIsActive] = useState(false); 

    const handleImageClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="md:hidden max-md:flex max-md:flex-row fixed-mobile-nav max-md:justify-between max-md:items-center ">
            <img src={logo} alt="prepmaster" />

            <div className="max-md:flex max-md:flex-col max-md:justify-end max-md:items-center">
                <img
                    src={isActive ? active : top}
                    alt="icon"
                    onClick={handleImageClick}
                />

                {/* List of Navigation Items */}
                {isActive && (
                    <div className="max-md:fixed max-md:top-40 max-md:left-0 max-md:right-0 max-md:bottom-0 max-md:bg-white max-md:z-80 max-md:flex max-md:justify-start max-md:items-center">
                        <nav className="navigation-items max-md:w-full max-md:h-full max-md:mt-20 max-md:bg-white max-md:items-start max-md:flex max-md:flex-col max-md:pl-12 max-md:pt-16 max-md:justify-evenly">
                            <ul>
                                <li className="max-md:z-50 max-md:py-2">Home</li>
                                <li className="max-md:z-50 max-md:py-2">Services</li>
                                <li className="max-md:z-50 max-md:py-2">Pricing</li>
                                <li className="max-md:z-50 max-md:py-2">Contact</li>
                                <li className="max-md:py-2">
                                <NavLink to="Signup" element={<Signup />}>
                                        <CustomButton text={"Sign up"} padding={"0.7rem 1.7rem"} />
                                    </NavLink>
                                </li>
                                <li className="max-md:py-2">
                                    <NavLink to="Signup" element={<Signup />}>
                                        <CustomButton text={"Try for free"} padding={"0.7rem 1.7rem"} />
                                    </NavLink>
                                </li>

                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
}
