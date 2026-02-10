"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./styles.module.css";

import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
  const array = new Array(3).fill("");

  return (
    <Swiper className={styles.banner__pagination} pagination={{ clickable: true }} modules={[Pagination]}>
      {array.map((_, index) => {
        return (
          <SwiperSlide key={index} className={styles.banner__style}>
            <Image
              src={`images/banner/banner${index + 1}.png`}
              className={`${styles.banner__image} width__100`}
              alt="배너이미지"
              width={0}
              height={0}
              sizes="100vw"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
