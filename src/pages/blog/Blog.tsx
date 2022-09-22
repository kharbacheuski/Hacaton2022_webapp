import React, { useContext } from "react";
import { Container, Paragraph } from "../../style/General";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { PostPreview, Description, SwiperStyles } from "./BlogStyles";
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import Man from "../../images/posts/man.jpg"
import Machine from "../../images/posts/machine.jpg"
import Cow from "../../images/posts/cow.jpg"
import ManLap from "../../images/posts/man_with_laptop.jpg"
import { AppContext } from "../../context/context";
import { AppContextType } from "../../types/types";

const Blog = () => {

  const {appStates} = useContext<AppContextType>(AppContext)

  return <Container style={{minHeight: "100vh"}}>
    <SwiperStyles theme={appStates.themeState}/>
    <Swiper
      speed={400}
      modules={[Navigation]}
      grabCursor={true}
      height={600}
      spaceBetween={100}
      direction={"horizontal"}
      style={{margin: "5rem 1rem", padding: "0 0 10rem 0"}}
      navigation
      loop={true}
      breakpoints={{
        991: {
          slidesPerView: 2,
          spaceBetween: 100
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        300: {
          slidesPerView: 1,
        }
      }}
    >
      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/bazalt">
          <PostPreview theme={appStates.themeState}>
            <Description theme={appStates.themeState}>
              <Paragraph theme={appStates.themeState} style={{fontSize: "30px"}}>Agroculture</Paragraph>
            </Description>
            <img src={Man} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/life">
          <PostPreview theme={appStates.themeState}>
            <Description theme={appStates.themeState}>
              <Paragraph theme={appStates.themeState} style={{fontSize: "30px"}}>Tractors</Paragraph>
            </Description>
            <img src={Machine} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/dog">
          <PostPreview theme={appStates.themeState}>
            <Description theme={appStates.themeState}>
              <Paragraph theme={appStates.themeState} style={{fontSize: "30px"}}>Animals</Paragraph>
            </Description>
            <img src={Cow} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/donald-duck">
          <PostPreview theme={appStates.themeState}>
            <Description theme={appStates.themeState}>
              <Paragraph theme={appStates.themeState} style={{fontSize: "30px"}}>IT in agro</Paragraph>
            </Description>
            <img src={ManLap} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>
    </Swiper>
  </Container>
}

export default Blog