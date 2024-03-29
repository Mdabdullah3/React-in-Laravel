// DropdownMenu.js
import React from "react";
import { Link } from "@inertiajs/react";

const DropdownMenu = ({ user }) => {
    return (
        <div className="absolute top-5 -left-16 bg-[#00473C] text-white rounded-md mt-2 py-6 px-8 w-52 transition duration-300 z-10">
            {user ? (
                <>
                    <ul className="text-lg font-normal">
                        <li className="mb-2">
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <hr />
                        <li className="mb-2 mt-1">
                            <Link href="/orders">My Orders</Link>
                        </li>
                        <hr />
                        <li className="mt-1">
                            <Link href="/profile">My Profile</Link>
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="block mb-2 text-lg font-normal mb-2"
                    >
                        Login
                    </Link>
                    <hr />
                    <Link href="/register" className="text-lg font-normal mt-2">
                        Register
                    </Link>
                </>
            )}
        </div>
    );
};

export default DropdownMenu;
