// Navbar.js
import React, { useState } from "react";
// import { Link } from "@inertiajs/react";
// import NavLink from "../NavLink";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
const Navbar = ({ auth }) => {
    const user = auth?.user;
    console.log(user);
    return (
        <nav className="w-10/12 mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <img
                        className="w-24 h-24"
                        src="https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/logo.png"
                        alt=""
                    />
                </div>
                <div>
                    <input
                        type="search"
                        name=""
                        className=" bg-[#00473C] placeholder-white border-[#00473C] border-3 rounded-full px-4 py-3 w-96 mx-auto placeholder:black text-lg"
                        placeholder="Search Your Food..."
                        id=""
                    />
                </div>
                <div className="font-bold flex gap-10 justify-center items-center list-none text-[#00473C]">
                    <li className="text-xl tracking-wider">Our Menus</li>
                    <li className="text-xl tracking-wider">Events </li>
                    <li className="text-3xl font-bold">
                        <PiShoppingCartSimpleLight />
                    </li>
                    <li className="text-3xl font-bold">
                        <LuUser />
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
