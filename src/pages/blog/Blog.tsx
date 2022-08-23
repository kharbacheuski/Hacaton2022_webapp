import React, { useContext } from "react";
import Post from "./posts/CassettePost";
import { Container, Paragraph } from "../../style/General";
import { Swiper, SwiperSlide } from 'swiper/react';
import { PostPreview, Description, PreviewImage } from "./BlogStyles";
import 'swiper/css';
import { Link } from "react-router-dom";
import Dog from "../../images/posts/dog.jpg"
import Duck from "../../images/posts/duck.jpg"
import Baz from "../../images/posts/baz.jpg"
import Cas from "../../images/posts/cas.jpg"
import { ThemeContext } from "../../context";

const Blog = () => {

    const {themeState} = useContext(ThemeContext)
    return <>
    <Swiper
      spaceBetween={80}
      style={{margin: "5rem 2rem 5rem 1rem"}}
      breakpoints={{
        991: {
          slidesPerView: 3,
          direction: "horizontal",
        },
        300: {
          slidesPerView: 2,
          direction: 'vertical',
          height: 600
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