import React from "react";

const Widget = () => {
    return (
        <div className="mt-16">
            <div className="w-10/12 mx-auto relative">
                <img
                    className=" rounded-3xl"
                    src="https://grandrestaurantv6-7.themegoods.com/clean/wp-content/uploads/sites/2/2022/09/eat-salads.jpg"
                    alt=""
                />
                <div className="absolute top-20 left-10 text-white">
                    <h1 className="">Our Restaurant</h1>
                    <p className="text-6xl my-3 font-bold w-5/12 capitalize">
                        A culinary adventure for all the senses
                    </p>
                    <button className="mt-2 bg-[#E6FF55] text-[#00473C] px-8 rounded-full py-3">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Widget;
