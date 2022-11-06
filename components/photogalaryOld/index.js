/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { InView, useInView } from "react-intersection-observer";
import style from "./photogalary.module.scss";
import { useEffect, useState } from "react";
import ReactImageVideoLightbox from "react-image-video-lightbox";

//type: photo / video
const vidoes = [
  {
    thumb: "/images/galary/galary1.webp",
    url: "/images/galary/galary1.webp",
    type: "image",
    id: 1,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
  {
    thumb: "/images/galary/galary2.webp",
    url: "/images/galary/galary2.webp",
    type: "video",
    id: 2,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
  {
    thumb: "/images/galary/galary3.webp",
    url: "/images/galary/galary3.webp",
    type: "video",
    id: 3,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
  {
    thumb: "/images/galary/galary4.webp",
    url: "/images/galary/galary4.webp",
    type: "video",
    id: 4,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
  {
    thumb: "/images/galary/galary1.webp",
    url: "/images/galary/galary5.webp",
    type: "video",
    id: 5,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
  {
    thumb: "/images/galary/galary2.webp",
    url: "/images/galary/galary6.webp",
    type: "video",
    id: 6,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },

  {
    thumb: "/images/galary/galary3.webp",
    url: "/images/galary/galary3.webp",
    type: "video",
    id: 7,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
  {
    thumb: "/images/galary/galary4.webp",
    url: "/images/galary/galary4.webp",
    type: "video",
    id: 8,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
  {
    thumb: "/images/galary/galary3.webp",
    url: "/images/galary/galary5.webp",
    type: "video",
    id: 9,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
  {
    thumb: "/images/galary/galary4.webp",
    url: "/images/galary/galary6.webp",
    type: "video",
    id: 10,
    text: "For the first time, we feel that it's safe to rent our high-value equipment.",
  },
];
export default function VideoGallary() {
  const [videoList, setVideosList] = useState(vidoes);
  const [popup, setPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const popupSetting = (index) => {
    setCurrentIndex(index);
    setPopup(true);
  };
  const closePopup = () => {
    setPopup(false);
    setCurrentIndex(0);
  };
  return (
    <div className={style.galarySection}>
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <div
              className={
                !inView
                  ? style.galaryTitle
                  : style.galaryTitle + " " + style.startAnimation
              }
            >
              বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন <br />
              <span> সুশাসন বাতায়ন</span> <br />
              নিউজ পোর্টালের শুভ উদ্বোধন
            </div>

            <div className={style.galary}>
              {videoList &&
                videoList.map((item, index) => (
                  <div
                    key={item.id + item.url}
                    className={style.galaryItem}
                    onClick={() => popupSetting(index)}
                  >
                    <Image
                      src={item.thumb}
                      alt="galary"
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="top left"
                      width="20vw"
                      height="30vh"
                    />
                    <div className={style.galaryHoverBg}>Item</div>
                    <div className={style.galaryHoverText}> {item.text}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </InView>
      {popup && (
        <div
          style={{
            zIndex: 9999,
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            position: "relative",
          }}
        >
          <ReactImageVideoLightbox
            data={vidoes}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={closePopup}
            onNavigationCallback={(currentIndex) =>
              console.log(`Current index: ${currentIndex}`)
            }
          />
        </div>
      )}
    </div>
  );
}
