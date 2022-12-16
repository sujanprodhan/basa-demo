/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";
import style from "./intro.module.scss";

export default function Intro() {
  const [index, setIndex] = useState(0);
  const list = [
    {
      id: 1,
      name: "জনাব কবির বিন আনোয়ার",
      designation: `সিনিয়র সচিব, পানি সম্পদ মন্ত্রণালয় ও 
        সভাপতি, বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন`,
      details:
        "জনাব কবির বিন আনোয়ার বিসিএস (প্রশাসন) ক্যাডারের ৭ম ব্যাচের একজন কর্মকর্তা এবং বর্তমানে তিনি সরকারের  সিনিয়র সচিব হিসেবে পানি সম্পদ মন্ত্রণালয়ে অধিষ্ঠিত আছেন। তিনি ঢাকা বিশ্ববিদ্যালয় হতে রাষ্ট্রবিজ্ঞানে এমএ ডিগ্রী অর্জন করেন। পরবর্তীতে তিনি আইন শিক্ষার অভিপ্রায়ে এলএলবি ডিগ্রী অর্জন করেন। তিনি ১৯৮৮ সালের ১৫ ফেব্রুয়ারী সহকারী কমিশনার হিসেবে বাংলাদেশ সিভিল সার্ভিসে যোগদান করেন এবং মাঠপ্রশাসনসহ সরকারের গুরুত্বপূর্ণ পদে দায়িত্ব পালন করেন। জনাব কবির বিন আনোয়ার নানাবিধ আন্তর্জাতিক ফোরামে বাংলাদেশ এর প্রতিনিধিত্ব করেছেন। তিনি ১৭টি দেশে মাননীয় প্রধানমন্ত্রীর সরকারী সফরে সফর সঙ্গী হিসেবে ছিলেন এবং সর্বমোট ৪২টি দেশ ভ্রমণ করেন। তিনি ITU থেকে ২০১৪, ২০১৫, ২০১৭, ২০১৮ সালে WISIS পুরষ্কার গ্রহণ করেন। এছাড়া ২০১৬ ও ২০১৮ সালে জনপ্রশাসন পদক এবং ২০১৭ সালে open Group Award গ্রহণ করেন। বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশনের ২০২১-২০২২ মেয়াদে সভাপতি হিসেবে এসোসিয়েশনের নেতৃত্ব প্রদান করছেন। ",
      photo: "/images/intro/president.jpg",
    },
    {
      id: 2,
      name: "জনাব মোঃ খলিলুর রহমান",
      designation: `সচিব, ডাক ও টেলিযোগাযোগ বিভাগ ও   
        মহাসচিব, বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশন `,
      details:
        "জনাব মোঃ খলিলুর রহমান সহকারী কমিশনার ও ম্যাজিস্ট্রেট পদে প্রশাসন ক্যাডারের একজন সদস্য হিসেবে ১৯৯৩ সালে জেলা প্রশাসকের কার্যালয়, নীলফামারিতে কর্মজীবন শুরু করেন এবং বর্তমানে ডাক ও টেলিযোগাযোগ বিভাগের সচিব হিসেবে অধিষ্ঠিত আছেন। তিনি মাঠ প্রশাসনসহ সচিবালয়ের গুরুত্বপূর্ণ পদে দায়িত্ব পালন করেছেন। তিনি প্রধানমন্ত্রীর কার্যালয়ে পরিচালক হিসেবেও দায়িত্ব পালন করেছেন। তিনি ভারতের National Center for Good Governance (NCGG) হতে Governance বিষয়ে উচ্চতর প্রশিক্ষণ লাভ করেন। যুক্তরাষ্ট্রের Duke University হতে Professional Development Program কোর্সে অংশগ্রহণ করেন। এছাড়া তিনি সিংগাপুরে Managing At The Top-2 (MATT-2) ট্রেনিং সম্পন্ন করেন। সরকারি কর্মকর্তা হিসেবে দক্ষতা উন্নয়ন প্রশিক্ষন ও দেশের প্রতিনিধিত্ব করতে তিনি বিভিন্ন দেশ ভ্রমণ করেন। তিনি ব্রাহ্মণবাড়িয়া জেলার এক সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন এবং পারিবারিক জীবনে তিনি ১ ছেলে ও ২ কন্যা সন্তানের জনক। বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশনের ২০২১-২০২২ মেয়াদে মহাসচিবের দায়িত্বভার গ্রহণ করেন। ",
      photo: "/images/intro/2.jpg",
    },
    {
      id: 3,
      name: "ডঃ দেওয়ান মুহাম্মদ হুমায়ূন কবীর",
      designation: `প্রকল্প পরিচালক (যুগ্মসচিব), এটুআই প্রোগ্রাম ও  
        আহবায়ক, পেশাগত দক্ষতা ও উন্নয়ন উপ-কমিটি   `,
      details:
        "ডঃ দেওয়ান মুহাম্মদ হুমায়ূন কবীর বর্তমানে প্রকল্প পরিচালক হিসেবে এটুআই প্রকল্পে কর্মরত আছেন। তিনি উপজেলা নির্বাহী অফিসার, জেলা প্রশাসক, প্রধানমন্ত্রীর কার্যালয়ের পরিচালক (প্রশাসন)সহ  মাঠ প্রশাসন ও সরকারের গুরুত্বপূর্ণ পদে অধিষ্ঠিত থেকে অত্যন্ত সুনামের সাথে তাঁর উপর অর্পিত দায়িত্ব পালন করে এসেছেন। তিনি ঢাকা বিশ্ববিদ্যালয় হতে জনপ্রশাসন বিষয়ে স্নাতক ও স্নাতকোত্তর করেছেন এবং রাজশাহী বিশ্ববিদ্যালয় হতে পাবলিক পলিসি বিষয়ে পিএইচডি সম্পন্ন করেছেন। এছাড়া তাঁর প্রকাশিত বই ও গবেষণা নিবন্ধ পাঠক মহলে সমাদৃত হয়েছে। তিনি পেশাগত দক্ষতা উন্নয়ন ও সরকারের প্রতিনিধিত্ব করতে ইউকে, ইউএসএ, অস্ট্রেলিয়া, জার্মানী, ফ্রান্স, তুরস্ক, দক্ষিণ কোরিয়া, জাপানসহ ২০ টির অধিক দেশে ভ্রমণ করেছেন। ডঃ দেওয়ান মুহাম্মদ হুমায়ূন কবীর ব্যক্তিগত জীবনে একটি পুত্র ও একটি কন্যার গর্বিত পিতা। তিনি বাংলাদেশ অ্যাডমিনিস্ট্রেটিভ সার্ভিস এসোসিয়েশনের ২০২১-২০২২ মেয়াদে পেশাগত দক্ষতা ও উন্নয়ন উপ-কমিটির আহবায়ক হিসেবে নির্বাচিত হয়েছেন এবং অধ্যাবধি দায়িত্ব পালন করছেন। ",
      photo: "/images/intro/3.jpg",
    },
  ];
  return (
    <div className={style.intro} id="introDiv">
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <div
              className={
                !inView
                  ? style.introBg
                  : style.introBg + " " + style.startAnimation
              }
            >
              <div
                className={
                  !inView
                    ? style.icon
                    : style.icon + " " + style.startAnimation2
                }
              >
                <Image src={list[index].photo} width={100} height={100} />
              </div>

              <div
                className={
                  !inView
                    ? style.presidentName
                    : style.presidentName + " " + style.startAnimation3
                }
              >
                {list[index].name}
              </div>
              <div
                className={
                  !inView
                    ? style.designation
                    : style.designation + " " + style.startAnimation4
                }
              >
                <div className={style.designationWidth}>
                  {list[index].designation}
                </div>
              </div>

              <div
                className={
                  !inView
                    ? style.details
                    : style.details + " " + style.startAnimation5
                }
              >
                <p>{list[index].details}</p>
              </div>

              <div
                className={
                  !inView
                    ? style.rightMenu
                    : style.rightMenu + " " + style.startAnimation6
                }
              >
                <ul className={style.rightList}>
                  <li
                    className={index === 0 && style.active}
                    onClick={() => setIndex(0)}
                  >
                    <span className={style.listStyle}></span>
                    সভাপতি
                    <div className={style.dotted}></div>
                  </li>
                  <li
                    onClick={() => setIndex(1)}
                    className={index === 1 && style.active}
                  >
                    <span className={style.listStyle}></span>
                    মহাসচিব
                    <div className={style.dotted}></div>
                  </li>
                  <li
                    onClick={() => setIndex(2)}
                    className={index === 2 && style.active}
                  >
                    <span className={style.listStyle}></span>
                    আহবায়ক
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
