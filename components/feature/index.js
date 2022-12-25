/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";
import style from "./feature.module.scss";
import { useEffect, useState } from "react";

export default function Feature() {  
  return (
    <div className={style.feature}>
      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <div
              className={
                !inView
                  ? style.innerBg
                  : style.innerBg + " " + style.startAnimation
              }
            >
              {/* Mobile menu start? */}
              <div className={style.mobileMenu}>
                
                <a href="#" target="_blank">
                  <div
                    className={
                      style.mobileMenuItem
                    }
                  
                  >
                    <i className="fa fa-users"></i>
                    <div className={style.infoText}>                      
                      জনকল্যাণে <br /> এ্যাসোসিয়েশন
                    </div>
                  </div>
                </a>

                
                <a href="#" target="_blank">
                  <div
                    className={
                      style.mobileMenuItem
                    }
                  
                  >
                   <i className="fa-solid fa-book"></i>
                   <div className={style.infoText}>    ই-লাইব্রেরী </div>
                  </div>
                </a>
                <a href="#" target="_blank">
                  <div
                    className={
                      style.mobileMenuItem
                    }                  
                  >
                   
                    <i className="fa-solid fa-users-viewfinder"></i>
                    <div className={style.infoText}>    সদস্য তালিকা </div>
                   
                    </div>
                </a>
                
                <a href="#" target="_blank">
                  <div
                    className={
                      style.mobileMenuItem
                    }
                  
                  >
                    <i className="fa-solid fa-users-gear"></i>
                    <div className={style.infoText}>    কার্যনির্বাহী কমিটি </div>
                  </div>
                </a>
                
              </div>

              {/* Mobile menu item end */}

              <div
                className={
                  !inView
                    ? style.leftTop
                    : style.leftTop + " " + style.startAnimationLeftTop
                }
              >
                <a href="#" target="_blank">
                  <div
                    className={
                      style.leftTopContent
                    }
                  
                  >
                    <i className="fa fa-users"></i>
                    <p>
                      {" "}
                      জনকল্যাণে <br /> এ্যাসোসিয়েশন{" "}
                    </p>
                  </div>
                </a>
              </div>

              <div
                className={
                  !inView
                    ? style.right
                    : style.right + " " + style.startAnimationRight
                }
              >
                <a href="#" target="_blank">
                  <div
                    className={style.rightContent}
                  >
                    <i className="fa-solid fa-book"></i>
                    <p> ই-লাইব্রেরী </p>
                  </div>
                </a>
              </div>

              <div
                className={
                  !inView
                    ? style.left
                    : style.left + " " + style.startAnimationLeft
                }
              >
                <a href="#" target="_blank">
                  <div
                    className={style.leftContent}
                  >
                    <i className="fa-solid fa-users-viewfinder"></i>
                    <p> সদস্য তালিকা </p>
                  </div>
                </a>
              </div>

              <div
                className={
                  !inView
                    ? style.bottomRight
                    : style.bottomRight + " " + style.startAnimationbottomRight
                }
              >
                <a href="#" target="_blank">
                  <div
                    className={style.bottomRightContent}
                  >
                    <i className="fa-solid fa-users-gear"></i>
                    <p> কার্যনির্বাহী কমিটি </p>
                  </div>
                </a>
              </div>
            </div>        

            <div
              className={
                !inView
                  ? style.featureHeading
                  : style.featureHeading + " " + style.featureDateAm
              }
            >
              ই-লাইব্রেরী
            </div>

            <ul
              className={
                !inView
                  ? style.committeeList
                  : style.committeeList + " " + style.featureDateAm
              }
            >
              <li>
                {/*  next time  change to URL */}
                <a href="javascript:void(0)"> কেন্দ্রীয় কমিটি </a>
              </li>
              <li>
                <a href="javascript:void(0)"> বিভাগীয় কমিটি </a>
              </li>
              <li>
                <a href="javascript:void(0)"> জেলা কমিটি </a>
              </li>
              <li>
                <a href="javascript:void(0)"> ব্যাচভিত্তিক কমিটি </a>
              </li>
            </ul>
          </div>
        )}
      </InView>
    </div>
  );
}
