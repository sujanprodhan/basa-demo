/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import { InView, useInView } from "react-intersection-observer";
import style from "./index.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Story() {
  const [menuActiveIndex, setMenuActiveIndex] = useState(0);
  const tabContent = useRef(null);

  const resetAnimation = (index) => {
    setMenuActiveIndex(index);
  };
  return (
    <div className={style.story}>
      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref} className={style.storyWrapper}>
            <div className={style.tabMenu}>
              <div
                className={`${style.tabMenuItem} ${
                  !menuActiveIndex && style.tabMenuItemActive
                }`}
                onClick={() => resetAnimation(0)}
              >
                সাম্প্রতিক কার্যক্রম
              </div>
              <div
                className={`${style.tabMenuItem} ${
                  menuActiveIndex && style.tabMenuItemActive
                }`}
                onClick={() => resetAnimation(1)}
              >
                সফলতার গল্প
              </div>
            </div>

            <div className={style.tabContent} ref={tabContent}>
              <div
                className={style.tableContent1}
                style={{ display: !menuActiveIndex ? "block" : "none" }}
              >
                <div className={style.contentBgArea}>
                  <div className={style.demoImage}>
                    <Image
                      src="/images/story/galary7-min.JPG"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={style.demoContent}>
                    <div className={style.title}>
                      বাংলাদেশ সিভিল সার্ভিস প্রশাসন একাডেমীতে জাতীয় শোক-দিবস
                      উদযাপন
                    </div>
                    <div className={style.description}>
                      স্বাধীনতার মহান স্থপতি জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর
                      রহমান এঁর ৪৭তম শাহাদাতবার্ষিকী ও জাতীয় শোক দিবস-২০২২
                      উপলক্ষ্যে বাংলাদেশ সিভিল সার্ভিস প্রশাসন একাডেমিতে ১৫
                      আগস্ট সকাল ১০.০০ টায় অনুভবে ও অনুপ্রেরণায় বঙ্গবন্ধু:
                      জনসেবায় আমাদের করণীয়” শীর্ষক আলোচনা সভা ও দোয়া মাহফিল
                      অনুষ্ঠিত হয়। আলোচনা সভায় প্রধান অতিথি হিসেবে উপস্থিত ছিলেন
                      জনপ্রশাসন মন্ত্রণালয়ের মাননীয় প্রতিমন্ত্রী জনাব ফরহাদ
                      হোসেন এম.পি, বিশেষ অতিথি ছিলেন জনপ্রশাসন মন্ত্রণালয়ের
                      সিনিয়র সচিব জনাব কে এম আলী আজম। আলোচনা সভায় সভাপতিত্ব করেন
                      বিসিএস প্রশাসন একাডেমির রেক্টর (সচিব) জনাব মোমিনুর রশিদ
                      আমিন। অনুষ্ঠানে আরোও উপস্থিত ছিলেন জনপ্রশাসন মন্ত্রণালয়
                      এবং মন্ত্রণালয়ের অধীন দপ্তর/সংস্থাসমূহের উর্ধ্বতন
                      কর্মকর্তাবৃন্দ, বিসিএস প্রশাসন একাডেমির অনুষদবর্গ ও
                      প্রশিক্ষণার্থীবৃন্দ। এছাড়া একাডেমির পক্ষ থেকে বঙ্গবন্ধু
                      বিষয়ক একটি প্রামাণ্য চিত্র প্রদর্শন করা হয়। আলোচনা শেষে
                      জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমান সহ ১৫ আগস্ট
                      শাহাদতবরনকারীগনের উদ্দেশ্যে এবং দেশ ও জাতির কল্যাণে বিশেষ
                      মোনাজাত করা হয়।
                    </div>
                    <div className={style.readMore}>
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        আরও দেখুন
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      !inView
                        ? style.news1
                        : style.news1 + " " + style.startAnimation1
                    }
                  >
                    <div className={style.shortImage}>
                      <Image
                        src="/images/story/demo1.png"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div className={style.shortTitle}>
                      স্বপ্ন আমার গ্রাম আমার শহর বাস্তবায়নে
                    </div>

                    <div className={style.seeMore}>
                      <Link href="/">
                        <a target="_blank"> বিস্তারিত </a>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      !inView
                        ? style.news2
                        : style.news2 + " " + style.startAnimation2
                    }
                  >
                    <div className={style.shortImage}>
                      <Image
                        src="/images/story/2.jpg"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div className={style.shortTitle}>
                      সীতাকুণ্ড ট্রাজেডি: নির্ভরতার আলো ছড়াচ্ছে জেলা প্রশাসন
                    </div>

                    <div className={style.seeMore}>
                      <Link href="/">
                        <a target="_blank"> বিস্তারিত </a>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      !inView
                        ? style.news3
                        : style.news3 + " " + style.startAnimation3
                    }
                  >
                    <div className={style.shortImage + " " + style.marginLeft}>
                      <Image
                        src="/images/story/3.png"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div
                      className={style.shortTitle + " " + style.marginLeftTitle}
                    >
                      জন্ম-মৃত্যু নিবন্ধনে দেশসেরা কিশোরগঞ্জ জেলা
                    </div>

                    <div className={style.seeMore + " " + style.marginLeftLink}>
                      <Link href="/">
                        <a target="_blank"> বিস্তারিত </a>
                      </Link>
                    </div>
                  </div>

                  {/* SP VIEw only slider */}
                  <div className={style.spSlider}>
                    <div className={style.storyContainer}>
                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/demo1.png"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          স্বপ্ন আমার গ্রাম আমার শহর বাস্তবায়নে
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a target="_blank"> বিস্তারিত </a>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/3.png"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          জন্ম-মৃত্যু নিবন্ধনে দেশসেরা কিশোরগঞ্জ জেলা
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a target="_blank"> বিস্তারিত </a>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/2.jpg"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          সীতাকুণ্ড ট্রাজেডি: নির্ভরতার আলো ছড়াচ্ছে জেলা প্রশাসন
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a target="_blank"> বিস্তারিত </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={style.tableContent1}
                style={{ display: !menuActiveIndex ? "none" : "block" }}
              >
                <div className={style.contentBgArea}>
                  <div className={style.demoImage}>
                    <Image
                      src="/images/story/demo2.png"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={style.demoContent}>
                    <div className={style.title}>
                      মাননীয় প্রধানমন্ত্রীর স্বপ্ন আমার গ্রাম, আমার শহর
                      বাস্তবায়ন
                    </div>
                    <div className={style.description}>
                      মাননীয় প্রধানমন্ত্রীর স্বপ্ন আমার গ্রাম, আমার শহর
                      বাস্তবায়নে জেলা প্রশাসন, লক্ষ্মীপুর ও উপজেলা প্রশাসন,
                      রামগতি, লক্ষ্মীপুরের উদ্যোগে রামগতি উপজেলার মেঘনা নদী
                      দ্বারা বিচ্ছিন্ন দুর্গম চরাঞ্চলের মানুষদের স্বাস্থ্য সেবা
                      নিশ্চিতে স্বপ্নযাত্রা ওয়াটার এ্যাম্বুলেন্সের শুভ উদ্বোধন
                      করেন জনাব মোঃ আনোয়ার হোছাইন আকন্দ, জেলা প্রশাসক ও বিজ্ঞ
                      জেলা ম্যাজিস্ট্রেট, লক্ষ্মীপুর। মাতৃ-মৃত্যু ও শিশু-মৃত্যু
                      হার হ্রাস, জরুরী চিকিৎসা এবং প্রসবকালীন স্বাস্থ্য সুরক্ষায়
                      যুগান্তকারী পরিবর্তন আনয়নে এই এ্যাম্বুলেন্স ভূমিকা রাখবে।
                    </div>
                    <div className={style.readMore}>
                      <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                      >
                        আরও দেখুন
                      </a>
                    </div>
                  </div>
                  <div
                    className={
                      !inView
                        ? style.news1
                        : style.news1 + " " + style.startAnimation1
                    }
                  >
                    <div className={style.shortImage}>
                      <Image
                        src="/images/story/galary4-min.JPG"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div className={style.shortTitle}>
                      বিজ্ঞান ভাবনার পথের দুর্ভাবনা সরাচ্ছে কুমিল্লা
                    </div>

                    <div className={style.seeMore}>
                      <Link href="/">
                        <a> বিস্তারিত </a>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      !inView
                        ? style.news2
                        : style.news2 + " " + style.startAnimation2
                    }
                  >
                    <div className={style.shortImage}>
                      <Image
                        src="/images/story/sitakundo.png"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div className={style.shortTitle}>
                      সুনামগঞ্জের যেভাবে আকর্ষণীয় পর্যটন কেন্দ্র হয়ে
                    </div>

                    <div className={style.seeMore}>
                      <Link href="/">
                        <a target="_blank"> বিস্তারিত </a>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      !inView
                        ? style.news3
                        : style.news3 + " " + style.startAnimation3
                    }
                  >
                    <div className={style.shortImage + " " + style.marginLeft}>
                      <Image
                        src="/images/story/2.jpg"
                        width={100}
                        height={70}
                      />
                    </div>
                    <div
                      className={style.shortTitle + " " + style.marginLeftTitle}
                    >
                      নান্দনিক রূপে সেজেছে খাগড়াছড়ির আলুটিলা
                    </div>

                    <div className={style.seeMore + " " + style.marginLeftLink}>
                      <Link href="/">
                        <a target="_blank"> বিস্তারিত </a>
                      </Link>
                    </div>
                  </div>

                  {/* SP VIEw only */}
                  <div className={style.spSlider}>
                    <div className={style.storyContainer}>
                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/galary4-min.JPG"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          বিজ্ঞান ভাবনার পথের দুর্ভাবনা সরাচ্ছে কুমিল্লা
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a> বিস্তারিত </a>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/sitakundo.png"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          সুনামগঞ্জের যেভাবে আকর্ষণীয় পর্যটন কেন্দ্র হয়ে
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="/">
                            <a target="_blank">বিস্তারিত </a>
                          </Link>
                        </div>
                      </div>

                      <div
                        className={
                          !inView
                            ? style.news1SP
                            : style.news1SP + " " + style.startAnimation1SP
                        }
                      >
                        <div className={style.shortImageSP}>
                          <Image
                            src="/images/story/2.jpg"
                            width={100}
                            height={70}
                          />
                        </div>
                        <div
                          className={
                            style.shortTitle + " " + style.titleMarginSP
                          }
                        >
                          নান্দনিক রূপে সেজেছে খাগড়াছড়ির আলুটিলা
                        </div>

                        <div
                          className={style.seeMore + " " + style.marginLeftSP}
                        >
                          <Link href="">
                            <a target="_blank"> বিস্তারিত </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
