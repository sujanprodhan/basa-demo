/* eslint-disable jsx-a11y/alt-text */
import Header from "../components/header";
import Footer from "../components/footer";
import Story from "../components/story";
import VideoGallary from "../components/videogallary";
import PhotoGalary from "../components/photogalary";
import Intro from "../components/intro";
import IntroTopBG from "../components/introTopBg";
import Feature from "../components/feature";

export default function Home() {
  return (
    <>
      <Header />
      <Story />
      <IntroTopBG />
      <Intro />
      <Feature />
      <PhotoGalary />
      <VideoGallary />
      <Footer />
    </>
  );
}
