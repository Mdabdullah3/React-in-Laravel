// resources/js/Pages/Dashboard/Index.jsx

import React, { useState } from "react";
// import { InertiaLink } from "@inertiajs/inertia-react";
// import Product from "./Product";
// import Orders from "./Orders";

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
                        {/* <InertiaLink
                            href={route("dashboard.product")}
                            className={`cursor-pointer ${
                                activeMenuItem === "product" ? "font-bold" : ""
                            }`}
                            onClick={() => handleMenuItemClick("product")}
                        >
                            Product
                        </InertiaLink> */}
                    </li>
                    <li>
                        {/* <InertiaLink
                            href={route("dashboard.orders")}
                            className={`cursor-pointer ${
                                activeMenuItem === "orders" ? "font-bold" : ""
                            }`}
                            onClick={() => handleMenuItemClick("orders")}
                        >
                            Orders
                        </InertiaLink> */}
                    </li>
                </ul>
            </div>

            {/* Dynamic Content */}
            <div className="w-3/4 p-4">
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur ut libero minus. Veritatis nam suscipit aut
                    architecto ex, tenetur animi placeat accusantium perferendis
                    commodi odit fugit, accusamus error veniam! Quas aut ut
                    earum fugit iure, porro quibusdam vel fuga commodi, tenetur
                    ab in mollitia sint alias similique nisi suscipit ea aliquam
                    unde nemo neque odio temporibus. Mollitia nobis optio,
                    delectus quas ut dolorem molestiae accusantium deserunt eum
                    iusto quia quibusdam voluptate fugiat quis! Ut a velit
                    tenetur at vero ipsum voluptates suscipit eius dignissimos
                    nisi quas, quaerat debitis, quae fugit omnis, animi nobis
                    fugiat vitae nesciunt porro modi. Deleniti, reiciendis?
                </h1>
                {/* {activeMenuItem === "product" && <Product />}
                {activeMenuItem === "orders" && <Orders />} */}
            </div>
        </div>
    );
};

export default Dashboard;
