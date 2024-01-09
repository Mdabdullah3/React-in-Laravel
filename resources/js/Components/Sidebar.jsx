// resources/js/components/Sidebar.jsx
import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Sidebar = ({ links }) => (
    <div className="bg-gray-800 text-white w-1/4 h-screen p-4">
        <ul>
            {links.map((link) => (
                <li key={link.name}>
                    <Link href={link.route}>{link.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Sidebar;
