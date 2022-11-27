/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./footer.module.scss";
import { InView, useInView } from "react-intersection-observer";

export default function Footer() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <div className={style.footerSection}>
              <div className={style.footer}>
                <div
                  className={
                    !inView
                      ? style.footerLogo
                      : style.footerLogo + " " + style.startAnimation
                  }
                >
                  <Image
                    src="/images/footer/footer-logo.png"
                    height={200}
                    width={600}
                  />
                </div>

                <div
                  className={
                    !inView
                      ? style.phoneNumber
                      : style.phoneNumber + " " + style.startAnimation2
                  }
                >
                  <i className="fa-sharp fa-solid fa-square-phone"></i>
                  ০১৭১১-১১ ২২ ৩৩
                </div>

                <div
                  className={
                    !inView
                      ? style.link
                      : style.link + " " + style.startAnimation3
                  }
                >
                  {width > 768 ? (
                    <>
                      <a href="">
                        <Image
                          width={54}
                          height={54}
                          src="/images/footer/facebook.png"
                        />
                      </a>
                      <a href="">
                        <Image
                          width={54}
                          height={54}
                          src="/images/footer/google.png"
                        />
                      </a>
                      <a href="">
                        <Image
                          width={54}
                          height={54}
                          src="/images/footer/youtube.png"
                        />
                      </a>
                      <a href="">
                        <Image
                          width={54}
                          height={54}
                          src="/images/footer/twitter.png"
                        />
                      </a>
                    </>
                  ) : (
                    <>
                      <a href="">
                        <Image
                          width={36}
                          height={36}
                          src="/images/footer/facebook-sp.png"
                        />
                      </a>
                      <a href="">
                        <Image
                          width={36}
                          height={36}
                          src="/images/footer/google-sp.png"
                        />
                      </a>
                      <a href="">
                        <Image
                          width={36}
                          height={36}
                          src="/images/footer/youtube-sp.png"
                        />
                      </a>
                      <a href="">
                        <Image
                          width={36}
                          height={36}
                          src="/images/footer/twitter-sp.png"
                        />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div
              className={
                !inView
                  ? style.copyright
                  : style.copyright + " " + style.startAnimation3
              }
            >
              কপিরাইট &copy; ২০২২ সর্বস্বত্ব সংরক্ষিত গ্ণপ্রজাতন্ত্রী বাংলাদেশ
              সরকার
            </div>
          </div>
        )}
      </InView>
    </>
  );
}
