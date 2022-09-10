import React, { useContext } from "react";
import { Paragraph } from "../../style/General";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { PostPreview, Description, SwiperStyles } from "./BlogStyles";
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import Dog from "../../images/posts/dog.jpg"
import Duck from "../../images/posts/duck.jpg"
import Baz from "../../images/posts/baz.jpg"
import Cas from "../../images/posts/cas.jpg"
import Mu from "../../images/posts/mu.jpg"
import { AppContext } from "../../context";

const Blog = () => {

  const {appStates: {themeState}} = useContext(AppContext)

  return <>
    <SwiperStyles theme={themeState}/>
    <Swiper
      speed={400}
      modules={[Navigation]}
      grabCursor={true}
      height={600}
      spaceBetween={100}
      direction={"horizontal"}
      style={{margin: "5rem 1rem", padding: "0 0 4.5rem 0"}}
      navigation
      loop={true}
      breakpoints={{
        991: {
          slidesPerView: 3,
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
        <Link style={{textDecoration: "none"}} to="/blog/cassette">
          <PostPreview theme={themeState}>
            <Description theme={themeState}>
              <Paragraph theme={themeState} style={{fontSize: "30px"}}>Сollector of cassettes</Paragraph>
            </Description>
            <img src={Cas} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/facts">
          <PostPreview theme={themeState}>
            <Description theme={themeState}>
              <Paragraph theme={themeState} style={{fontSize: "30px"}}>Facts</Paragraph>
            </Description>
            <img src={Cas} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/bazalt">
          <PostPreview theme={themeState}>
            <Description theme={themeState}>
              <Paragraph theme={themeState} style={{fontSize: "30px"}}>About Stones</Paragraph>
            </Description>
            <img src={Baz} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/life">
          <PostPreview theme={themeState}>
            <Description theme={themeState}>
              <Paragraph theme={themeState} style={{fontSize: "30px"}}>Life & New-York</Paragraph>
            </Description>
            <img src={Mu} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/dog">
          <PostPreview theme={themeState}>
            <Description theme={themeState}>
              <Paragraph theme={themeState} style={{fontSize: "30px"}}>Dog and Ball</Paragraph>
            </Description>
            <img src={Dog} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link style={{textDecoration: "none"}} to="/blog/donald-duck">
          <PostPreview theme={themeState}>
            <Description theme={themeState}>
              <Paragraph theme={themeState} style={{fontSize: "30px"}}>Ducccks</Paragraph>
            </Description>
            <img src={Duck} alt=""/>
          </PostPreview>
        </Link>
      </SwiperSlide>
    </Swiper>
  </>
}

export default Blog