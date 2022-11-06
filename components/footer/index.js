/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import style from "./footer.module.scss";
import { InView, useInView } from "react-intersection-observer";

export default function Footer() {
  return (
    <>
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <div
              className={
                !inView
                  ? style.footerSection
                  : style.footerSection + " " + style.startAnimation
              }
            >
              <div className={style.footer}>
                <div
                  className={
                    !inView
                      ? style.footerContent
                      : style.footerContent + " " + style.startAnimation
                  }
                >
                  <div
                    className={
                      !inView
                        ? style.footerLogo
                        : style.footerLogo + " " + style.startAnimation2
                    }
                  >
                    <Image src="/images/logo.png" height={80} width={330} />
                  </div>
                </div>

                <div
                  className={
                    !inView
                      ? style.phoneNumber
                      : style.phoneNumber + " " + style.startAnimation2
                  }
                >
                  <i className="fa-sharp fa-solid fa-square-phone"></i>
                  01740-XXXXXX
                </div>

                <div
                  className={
                    !inView
                      ? style.link
                      : style.link + " " + style.startAnimation3
                  }
                >
                  <a href="">
                    <Image
                      width={36}
                      height={36}
                      src="/images/footer/facebook.png"
                    />
                  </a>
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
              কপিরাইত &copy; ২০২২ সর্বস্বত্ব সংরক্ষিত গ্ণপ্রজাতন্ত্রী বাংলাদেশ
              সরকার
            </div>
          </div>
        )}
      </InView>
    </>
  );
}
