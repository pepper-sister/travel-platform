import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./styles.module.css";

import "swiper/css";
import "swiper/css/pagination";

export default function BoardsListBannerUI() {
  return (
    <Swiper className={styles.banner__pagination} pagination={{ clickable: true }} modules={[Pagination]}>
      <SwiperSlide className={styles.banner__style}>
        <Image
          className={styles.banner__image}
          src="/images/banner1.png"
          alt="배너이미지"
          width={0}
          height={0}
          sizes="100vw"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.banner__style}>
        <Image
          className={styles.banner__image}
          src="/images/banner2.png"
          alt="배너이미지"
          width={0}
          height={0}
          sizes="100vw"
        />
      </SwiperSlide>
      <SwiperSlide className={styles.banner__style}>
        <Image
          className={styles.banner__image}
          src="/images/banner3.png"
          alt="배너이미지"
          width={0}
          height={0}
          sizes="100vw"
        />
      </SwiperSlide>
    </Swiper>
  );
}
