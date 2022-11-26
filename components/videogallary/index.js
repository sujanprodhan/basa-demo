/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { InView, useInView } from "react-intersection-observer";
import style from "./videogallary.module.scss";
import { useEffect, useState } from "react";
import ReactImageVideoLightbox from "react-image-video-lightbox";

//type: photo / video
const vidoes = [
  {
    thumb: "/images/videos/thumb1.png",
    url: "https://www.youtube.com/embed/RbQwhF21qVY",
    type: "video",
    id: 1,
  },
  {
    thumb: "/images/videos/thumb2.png",
    url: "https://www.youtube.com/embed/2vaIx55bXFI",
    type: "video",
    id: 2,
  },
  {
    thumb: "/images/videos/thumb3.png",
    url: "https://www.youtube.com/embed/9QRRGN_VgXU",
    type: "video",
    id: 3,
  },
  {
    thumb: "/images/videos/thumb4.jpg",
    url: "https://www.youtube.com/watch?v=RbQwhF21qVY",
    type: "video",
    id: 4,
  },
  {
    thumb: "/images/videos/thumb5.jpg",
    url: "https://www.youtube.com/embed/kY8w233zNdY",
    type: "video",
    id: 5,
  },
  {
    thumb: "/images/videos/thumb6.jpg",
    url: "https://www.youtube.com/embed/kY8w233zNdY",
    type: "video",
    id: 6,
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
    <>
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref} className={style.videoGallarySection}>
            <div className={style.topBgSp}></div>
            <div className={style.title}>
              <i className="fa-solid fa-camera"></i>
              ভিডিও গ্যালারি
            </div>

            <div
              className={
                !inView
                  ? style.gallary
                  : style.gallary + " " + style.startAnimation
              }
            >
              {videoList &&
                videoList.map((item, index) => (
                  <div className={style.gallaryItem} key={index}>
                    <div
                      className={style.imageView}
                      onClick={() => popupSetting(index)}
                    >
                      <Image
                        src={item.thumb}
                        alt="galary"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom center"
                      />
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                  </div>
                ))}

              <div className={style.seeMoreVideo}>
                <Link href="">
                  <a target="_blank"> বিস্তারিত </a>
                </Link>
              </div>
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
            startIndex={currentIndex}
            showResourceCount={true}
            onCloseCallback={closePopup}
            onNavigationCallback={(currentIndex) => console.log(``)}
          />
        </div>
      )}
    </>
  );
}
