// Navbar.js
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import Dropdown from "../Dropdown";
import NavLink from "../NavLink";
import ApplicationLogo from "../ApplicationLogo";

const Navbar = ({ auth }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const user = auth?.user;
    console.log(user);
    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </NavLink>
                    </div>

                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-md p-1"
                        />
                        <NavLink href="/shop" active={route().current("shop")}>
                            Shop
                        </NavLink>
                        <NavLink href="/cart" active={route().current("cart")}>
                            Cart
                        </NavLink>

                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="cursor-pointer inline-flex items-center">
                                    {user.name && (
                                        <img
                                            src="/path-to-default-image.jpg"
                                            alt="User Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    )}
                                    {!user.name && (
                                        <svg
                                            className="h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                {!user.name && (
                                    <>
                                        <Dropdown.Link href={route("login")}>
                                            Login
                                        </Dropdown.Link>
                                        <Dropdown.Link href={route("register")}>
                                            Signup
                                        </Dropdown.Link>
                                    </>
                                )}
                                {user.name && (
                                    <>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link>My Orders</Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("dashboard")}
                                        >
                                            Dashboard
                                        </Dropdown.Link>
                                    </>
                                )}
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
