"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const reviews = [
  {
    clientName: "Lisa Johnson",
    url: "https://g.co/kgs/jdDBtVX",
    reviewText:
      "These guys are great! They came when they said the would. They answered all my questions promptly and helped me whenever I needed it. They took very good care of us this year!",
  },
  {
    clientName: "Amethyst",
    url: "https://g.co/kgs/E2QHs5H",
    reviewText:
      "These guys saved both my 90,000 gallon pool and year-round spa. They’ve done everything from adding aeration, heater & chlorinator replacement, reminding me to order chemicals before they run out, acid washing, winterization, chemical testing, cleaning... ",
  },
  {
    clientName: "Holly Cormell",
    url: "https://g.co/kgs/NuzoCt8",
    reviewText:
      "We LOVE IdaHomeServ ... we've used another company before them and switched to Paul and I wish I would of know about IdaHomeServ sooner because the quality of work and customer service is top notch... ",
  },
];

const stars = [1, 2, 3, 4, 5];

export const SwiperAutoFlow = ({ styles }) => {
  return (
    <div className={styles.swiperContainer}>
      <p className={styles.swiperHeader}>What our customers say</p>

      <Swiper
        className={styles.swiperAutoFlow}
        loop
        grabCursor
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        effect="freemode"
        modules={[Autoplay, FreeMode]}
      >
        {reviews.map((reviews) => (
          <SwiperSlide key={reviews.clientName}>
            <div className={styles.reviewContainer}>
              <div className={styles.clientName}>
                <div className={styles.avatar} />

                <p>{reviews.clientName}</p>

                <div className={styles.verifiedIcon} />
              </div>

              <div className={styles.stars}>
                {stars.map((star) => (
                  <div key={star} className={styles.star} />
                ))}
              </div>

              <p className={styles.reviewText}>
                {reviews.reviewText}
                <a href={reviews.url} className={styles.reviewLink}>
                  Read full review on Google &gt;
                </a>{" "}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
