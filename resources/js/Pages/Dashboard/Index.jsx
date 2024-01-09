// resources/js/Pages/Dashboard/Index.jsx

import React, { useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Products from "./Products";

const Dashboard = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-200 p-4">
                <h1 className="text-xl font-bold mb-4">Dashboard</h1>
                <ul>
                    <li>navbar</li>
                    <li>navbar</li>
                    <li>
                        <InertiaLink
                            href={route("dashboard.product")}
                            className={`cursor-pointer ${
                                activeMenuItem === "product" ? "font-bold" : ""
                            }`}
                            onClick={() => handleMenuItemClick("product")}
                        >
                            Product
                        </InertiaLink>
                    </li>
                </ul>
            </div>

            {/* Dynamic Content */}
            <div className="w-3/4 p-4">
                {activeMenuItem === "product" && <Products />}
            </div>
        </div>
    );
};

export default Dashboard;
