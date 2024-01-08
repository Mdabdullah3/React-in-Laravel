/* eslint-disable no-undef */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { ProductData } from "./ProductsData";
import { ImCart } from "react-icons/im";
const Products = () => {
    return (
        <div className="mt-20 relative">
            <div className="w-11/12 mx-auto">
                <h1 className="text-5xl w-2/12 font-bold tracking-wider  ml-4">
                    View Our Menus
                </h1>
            </div>

            <div className="mt-16 w-11/12 mx-auto">
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination]}
                >
                    {ProductData?.map((item) => (
                        <SwiperSlide>
                            <div className="">
                                <img
                                    className="w-80 h-96 rounded-3xl cursor-pointer mb-4"
                                    src={item.img}
                                    alt=""
                                />
                                <div>
                                    <h1 className="text-lg tracking-wider font-semibold capitalize">
                                        {item?.name}
                                    </h1>
                                    <p className=" tracking-wider text-gray-600 text-sm w-10/12 mt-1">
                                        {item?.description?.slice(0, 60)}
                                    </p>
                                    <div className="flex items-center justify-between w-9/12 mb-8">
                                        <h1 className="text-[#0B4E43] font-bold mt-3 tracking-wider text-xl">
                                            ${item?.sprice}
                                        </h1>
                                        <button className="bg-[#E6FF55] text-[#00473C] text-md px-4 py-3 rounded-full flex items-center gap-1 mt-3">
                                            <ImCart /> Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className=" absolute md:top-0 top-10  right-20 md:right-20">
                <h1 className="text-md  px-4 py-10 transition duration-300 cursor-pointer tracking-wider border-[2px] text-[#00473C] bg-[#E6FF55] rounded-full font-bold">
                    View All
                </h1>
            </div>
        </div>
    );
};

export default Products;
