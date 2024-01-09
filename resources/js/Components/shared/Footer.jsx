import React from "react";

const Footer = () => {
    return (
        <div className="mt-20 text-black">
            <div className="bg-[#D8E5D6] w-10/12 mx-auto rounded-3xl py-10">
                <div className="w-10/12 flex justify-around mx-auto items-center">
                    <h1 className="text-2xl font-bold text-[#00473C]">
                        Call Us on +45 453 3432
                    </h1>
                    <button className="bg-[#00473C] text-[#E6FF55] text-md px-10 py-4 rounded-full">
                        Make a Revision
                    </button>
                </div>
                <img
                    className="w-52 mx-auto mt-4"
                    src="https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/logo.png"
                    alt=""
                />
                <p className="text-center mt-6 tracking-wider">
                    Copyright © Grand Restaurant Theme Demo by ThemeGoods
                </p>
            </div>
        </div>
    );
};

export default Footer;
