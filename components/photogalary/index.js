/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { InView, useInView } from "react-intersection-observer";
import style from "./photogalary.module.scss";
import ReactImageVideoLightbox from "react-image-video-lightbox";

//type: photo / video
const photos = [
  {
    data: [
      {
        thumb: "/images/galary/galary0-min.JPG",
        url: "/images/galary/galary0-min.JPG",
        type: "photo",
        id: 1,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
      {
        thumb: "/images/galary/galary1-min.JPG",
        url: "/images/galary/galary1-min.JPG",
        type: "photo",
        id: 2,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
    ],
  },
  {
    data: [
      {
        thumb: "/images/galary/galary2-min.JPG",
        url: "/images/galary/galary2-min.JPG",
        type: "photo",
        id: 3,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
      {
        thumb: "/images/galary/galary3-min.JPG",
        url: "/images/galary/galary3-min.JPG",
        type: "photo",
        id: 4,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
    ],
  },

  {
    data: [
      {
        thumb: "/images/galary/galary4-min.JPG",
        url: "/images/galary/galary4-min.JPG",
        type: "photo",
        id: 5,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
      {
        thumb: "/images/galary/galary5-min.JPG",
        url: "/images/galary/galary5-min.JPG",
        type: "photo",
        id: 6,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
    ],
  },
  {
    data: [
      {
        thumb: "/images/galary/galary6-min.JPG",
        url: "/images/galary/galary6-min.JPG",
        type: "photo",
        id: 7,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
      {
        thumb: "/images/galary/galary7-min.JPG",
        url: "/images/galary/galary7-min.JPG",
        type: "photo",
        id: 8,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
    ],
  },

  {
    data: [
      {
        thumb: "/images/galary/galary8-min.JPG",
        url: "/images/galary/galary8-min.JPG",
        type: "photo",
        id: 10,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
      {
        thumb: "/images/galary/galary9-min.JPG",
        url: "/images/galary/galary9-min.JPG",
        type: "photo",
        id: 11,
        text: "বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন  ফটো গ্যালারী",
      },
    ],
  },
];

const imagesList = [
  {
    url: "/images/galary/galary0-min.JPG",
    type: "photo",
    id: 1,
  },
  {
    url: "/images/galary/galary1-min.JPG",
    type: "photo",
    id: 2,
  },
  {
    url: "/images/galary/galary2-min.JPG",
    type: "photo",
    id: 3,
  },
  {
    url: "/images/galary/galary3-min.JPG",
    type: "photo",
    id: 4,
  },
  {
    url: "/images/galary/galary4-min.JPG",
    type: "photo",
    id: 5,
  },
  {
    url: "/images/galary/galary5-min.JPG",
    type: "photo",
    id: 6,
  },
  {
    url: "/images/galary/galary6-min.JPG",
    type: "photo",
    id: 7,
  },
  {
    url: "/images/galary/galary7-min.JPG",
    type: "photo",
    id: 8,
  },
  {
    url: "/images/galary/galary8-min.JPG",
    type: "photo",
    id: 9,
  },
  // {
  //   url: "/images/galary/galary9-min.JPG",
  //   type: "photo",
  //   id: 10,
  // },
];
export default function VideoGallary() {
  const [photoList, setPhotoList] = useState(photos);
  const [popup, setPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [offset, setOffset] = useState(0);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const popupSetting = (index, position) => {
    setPopup(true);
    // let current = 0;
    // if (position === 0) {
    //   current = index * 2;
    // } else {
    //   current = index * 2 + 1;
    // }
    // console.log(" current ", current);
    setCurrentIndex(index);
  };
  const closePopup = () => {
    setPopup(false);
    setCurrentIndex(0);
  };

  return (
    <div className={style.galarySection} ref={ref} id="photoDiv">
      <InView triggerOnce>
        {({ inView, ref, entry, thresold }) => (
          <div ref={ref}>
            <div
              className={
                !inView
                  ? style.galaryTitle
                  : style.galaryTitle + " " + style.startAnimation
              }
            >
              <i className="fa-solid fa-camera"></i>
              ফটো গ্যালারী
              <div className={style.seeMoreGalary}>
                <Link href="">
                  <a target="_blank"> বিস্তারিত </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </InView>

      <div className={style.galary} id="galaryList">
        {imagesList &&
          imagesList.map((item, index) => (
            <div key={item.id} className={style.galaryItem}>
              <div
                className={style.image1}
                onClick={() => popupSetting(index, 0)}
              >
                <Image
                  src={item.url}
                  alt="galary"
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="top left"
                  width="400px"
                  height="300px"
                  className={style.photoAlbum}
                />
                <div className={style.hoverBg1}>গ্যালারী</div>
                <div className={style.hover1}>
                  {item.data && item.data[1].text}
                </div>
              </div>
            </div>
          ))}
      </div>
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
            data={imagesList}
            startIndex={currentIndex}
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
