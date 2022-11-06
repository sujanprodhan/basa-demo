import Head from "next/head";
import Image from "next/image";
import style from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={style.header}>
      <div className={style.headerArea}></div>

      <div className={style.headerMenu}>
        <div className={style.headerMenuLeft}>
          <ul>
            <li>
              <span className={style.logoText}>☀ Company</span>
            </li>
            <li> About </li>
            <li> Market </li>
          </ul>
        </div>
        <div className={style.headerTitle}>
          Making rental as easy as it can be
        </div>
        <div className={style.headerMenuRight}>
          <ul>
            <li> Language </li>
            <li className={style.bgButtonGreen}> Book a Demo </li>
            <li className={style.bgButtonGreenDark}> Login </li>
          </ul>
        </div>
      </div>
      <div className={style.centerBoxAnimation}> Your Company </div>
      <div className={style.bottomLeftMenu}>&#x2193;</div>
      <div className={style.bottomRightMenu}>
        <div className={style.bottomSlider}>
          <div className={style.bottomSliderItem}>
            <span className={style.sliderActive}> 01 </span>
            <br />
            <span className={style.sliderActive}> Category </span>
          </div>
          <div className={style.bottomSliderItem}>
            02
            <br />
            <span> Slider </span>
          </div>
          <div className={style.bottomSliderItem}>
            03
            <br />
            <span> Archieve </span>
          </div>
        </div>
      </div>
    </div>
  );
}
