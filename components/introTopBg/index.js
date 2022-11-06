/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";
import style from "./introTopBg.module.scss";

export default function IntroTopBG() {
  return (
    <div className={style.introTop}>
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <div
              className={
                !inView
                  ? style.bgAnimationTop
                  : style.bgAnimationTop + " " + style.startAnimationFirst
              }
            ></div>
          </div>
        )}
      </InView>
    </div>
  );
}
