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
          <div
            ref={ref}
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
                    : style.footerContent + " " + style.startAnimation2
                }
              >
                <div className={style.footerLogo}>
                  <Image src="/images/logo.png" height={80} width={330} />
                </div>
                <div className={style.menu}>
                  <div className={style.menuList}>
                    <div className={style.footerMenuTitle}>
                      {" "}
                      গুরুত্বপূর্ণ লিংক{" "}
                    </div>
                    <ul>
                      <li>
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> বাসা সম্পর্কে </a>
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> কমিটি ও কার্যক্রম</a>
                        </Link>
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> সুবিধাসমুহ </a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={style.menuList}>
                    <div className={style.footerMenuTitle}>
                      {" "}
                      গুরুত্বপূর্ণ লিংক
                    </div>
                    <ul>
                      <li>
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> দক্ষতা উন্নয়ন </a>
                        </Link>
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> জ্ঞানকোষ </a>
                        </Link>
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> ই-লাইব্রেরি </a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={style.menuList}>
                    <div className={style.footerMenuTitle}>
                      {" "}
                      গুরুত্বপূর্ণ লিংক
                    </div>
                    <ul>
                      <li>
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> দক্ষতা উন্নয়ন </a>
                        </Link>
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> জ্ঞানকোষ </a>
                        </Link>
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-right"></i>
                        <Link href="#">
                          <a> ই-লাইব্রেরি</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
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
