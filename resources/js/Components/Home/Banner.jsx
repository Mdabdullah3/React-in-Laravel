import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./Swiper.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Banner() {
    const BannerImg = [
        {
            title: "Where every ingredient tells a story",
            img: "https://grandrestaurantv6-7.themegoods.com/clean/wp-content/uploads/sites/2/2022/09/salad-with-vegetables-and-octopus-2021-08-27-10-14-31-utc.jpg",
        },
        {
            title: "THE HEALTHY BURGER FOR YOUR KIDS",
            img: "https://fastwpdemo.com/newwp/heritaste/wp-content/uploads/2022/07/funfact-bg.jpg",
        },
        {
            title: "GET BEST QUALITY FOOD FROM US",
            img: "https://fastwpdemo.com/newwp/heritaste/wp-content/uploads/2022/07/menu-bg-2.jpg",
        },
    ];
    return (
        <div className="mt-3 w-10/12 mx-auto mb-10">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                <div className="">
                    {BannerImg?.map((item) => (
                        <SwiperSlide>
                            <div className="">
                                <img
                                    className=" h-screen mx-auto w-full rounded-[30px]"
                                    src={item?.img}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
}
