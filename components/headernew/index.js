/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { EffectFade } from "swiper";
import style from "./header.module.scss";
import Lottie from "lottie-react";
import sliderAnimation1 from "./slider1.json";
import "swiper/css";
SwiperCore.use([Navigation, Pagination, A11y]);

export default function Home() {
  const swiper = useSwiper();
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [hasMenuOpened, setHasMenuOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
      SwiperCore.use([Autoplay]);
    }, 2200);
  }, []);

  const scroll = () => {
    var element = document.getElementById("introDiv");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [scrolled, setScrolled] = useState(false);
  var lastScrollTop = 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const offset = window.scrollY;
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop && offset > 220) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll, scrolled]);

  const mobileMenu = () => {
    setHasMenuOpened(true);
    setOpenMobileMenu(!openMobileMenu);
  };

  const sliderRef = useRef();
  useEffect(() => {
    // sliderRef.current?.swiper.slideTo(currentIndex);
  }, [currentIndex]);

  return (
    <>
      {hasMenuOpened && (
        <div
          className={
            openMobileMenu
              ? style.mobileMenu
              : style.mobileMenu + " " + style.mobileClose
          }
        >
          <div className={style.close} onClick={() => mobileMenu()}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>

          <div className={style.spMenuList}>
            <Image width={60} height={60} src="/images/logo-sp.png" />
            <div className={style.menuTwoSide}>
              <ul>
                <li>
                  <select className={style.selectLang} defaultValue="bn">
                    <option value="bn"> বাংলা </option>
                    <option value="en"> English </option>
                  </select>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> রেজিস্ট্রেশন</a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> মেম্বার লগইন </a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> ফটো গ্যালারি </a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> ই-রেজিস্ট্রেশন</a>
                  </Link>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> দক্ষতা উন্নয়ন </a>
                  </Link>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> যোগাযোগ </a>
                  </Link>
                </li>
              </ul>

              <ul>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> তথ্য সেবা </a>
                  </Link>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> রেজিস্ট্রেশন</a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> মেম্বার লগইন </a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> ফটো গ্যালারি </a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> ই-রেজিস্ট্রেশন</a>
                  </Link>
                </li>

                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> দক্ষতা উন্নয়ন </a>
                  </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-square-check"></i>
                  <Link href="#">
                    <a> যোগাযোগ </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {scrolled && (
        <div className={style.sticky}>
          <div className={style.headerMenuLeftSticky}></div>
          <div className={style.headerMenuRightSticky}>
            <ul>
              <li>
                <select className={style.selectLang} defaultValue="bn">
                  <option value="bn"> বাংলা </option>
                  <option value="en"> English </option>
                </select>
              </li>
              <li
                className={style.bgButtonGreen + " " + style.onlyMobile}
                onClick={() => mobileMenu()}
              >
                <i className="fa fa-solid fa-bars"></i> মেনু{" "}
              </li>
              <li className={style.bgButtonGreenDark}>
                <i className="fa fa-thin fa-user"></i> লগইন
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className={style.mainAnimation}>
        <div className={style.header}>
          <div className={style.headerMenu}> </div>
          <div className={style.headerMenuLeft}></div>
          <div className={style.headerTitle}>
            {/* <div className={style.headerTitleTextTop}>
              <Image
                src="/images/basa-logo-sp-old.jpg"
                alt="logo"
                height={50}
                width={50}
              />
            </div> */}
            <div className={style.headerTitleText}>
              বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন
            </div>
            <div className={style.headerSubTitleText}>
              বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন বাংলাদেশ
              অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ
              সার্ভিস এসোসিয়েশন বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন
            </div>
          </div>

          <div className={style.headerTitleSP}>
            <div className={style.headerTitleTextTopSP}>
              <Image
                src="/images/basa-logo-sp-old.jpg"
                alt="logo"
                height={50}
                width={50}
              />
            </div>
            <div className={style.headerTitleTextSP}>
              বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন
            </div>
          </div>

          <div className={style.headerMenuRight}>
            <ul>
              <li>
                <select className={style.selectLang} defaultValue="bn">
                  <option value="bn"> বাংলা </option>
                  <option value="en"> English </option>
                </select>
              </li>
              <li
                className={style.bgButtonGreen + " " + style.onlyMobile}
                onClick={() => mobileMenu()}
              >
                <i className="fa fa-solid fa-bars"></i> মেনু{" "}
              </li>
              <li className={style.bgButtonGreenDark}>
                <i className="fa fa-thin fa-user"></i> লগইন
              </li>
            </ul>
          </div>

          {/* {startAnimation && (
            <div className={style.sliderArea}>
              //  Old slider design  
              <Swiper
                ref={sliderRef}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: ".nextSlider",
                  prevEl: ".prevSlider",
                }}
                onSlideChange={(index) => {
                  let dec = index.snapIndex - 1;
                  setCurrentIndex(dec <= 0 || index.snapIndex == 4 ? 0 : dec);

                  console.log(currentIndex);
                }}
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <SwiperSlide>
                  <Lottie animationData={sliderAnimation1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Lottie animationData={sliderAnimation1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Lottie animationData={sliderAnimation1} />
                </SwiperSlide>
              </Swiper>
            </div>
          )} */}

          {startAnimation && (
            <div className={style.sliderArea}>
              <div className={style.animationArea}>
                <div className={style.firstBox} onClick={() => mobileMenu()}>
                  {" "}
                  Menu
                </div>
                <div className={style.secondLine}> </div>
                <div className={style.thirdBox}> </div>
                <div className={style.fourthdBox}> </div>
                <div className={style.fifthBox}> </div>
                <div className={style.sixthBox}> </div>
              </div>
            </div>
          )}

          <div className={style.bottomArea}>
            <div className={style.bottomLeftMenu}>
              <div className={style.iconBorder} onClick={() => scroll()}>
                &#x2193;
              </div>
            </div>

            <div className={style.bottomRightMenu}>
              {/* <div className={style.bottomSlider}>
                <div
                  className={
                    currentIndex === 0
                      ? style.bottomSliderItem +
                        " nextSlider " +
                        style.sliderActive
                      : style.bottomSliderItem + " nextSlider "
                  }
                  onClick={() => setCurrentIndex(0)}
                >
                  <span>০১</span>
                  <br />
                  <span>ব্যানার-১</span>
                </div>
                <div
                  className={
                    currentIndex === 1
                      ? style.bottomSliderItem +
                        " nextSlider " +
                        style.sliderActive
                      : style.bottomSliderItem + " nextSlider "
                  }
                  onClick={() => setCurrentIndex(1)}
                >
                  <span>০২</span>
                  <br />
                  <span>ব্যানার-২</span>
                </div>
                <div
                  className={
                    currentIndex === 2
                      ? style.bottomSliderItem +
                        " nextSlider " +
                        style.sliderActive
                      : style.bottomSliderItem + " nextSlider "
                  }
                  onClick={() => setCurrentIndex(2)}
                >
                  <span>০৩</span>
                  <br />
                  <span>ব্যানার-৩</span>
                </div>
              </div> */}
            </div>
            <div className={style.bottomRound}></div>
          </div>
        </div>
      </div>
    </>
  );
}
