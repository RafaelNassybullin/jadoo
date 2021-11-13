import React from 'react';
import styled from 'styled-components'
import Titles from "./Titles";
import SlideComponent from "./Slide";

import {Swiper, SwiperSlide} from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css'
import {Navigation, Pagination, Mousewheel} from 'swiper';
import Icons from "../assets/Icons/Icons";

const Testimonials = () => {
    return (
        <Section>
            <TitleWrapper>
                <Titles upTitle='Testimonials'
                        title='What people say about Us.'
                        styleText='left'
                        styleCenter='flex-start'/>
                <div className="bulletss">


                </div>
            </TitleWrapper>
            <SliderWrapper>
                <div className="navigation">
                    <div className="up">
                        <Icons up/>
                    </div>
                    <div className="down">
                        <Icons down/>
                    </div>
                </div>
                <Swiper className={'swiper'}
                        direction={'vertical'}
                        modules={[Navigation, Pagination, Mousewheel]}
                        pagination={{clickable: true,
                            el: '.bulletss'}}
                        navigation={{clickable: true,
                            nextEl: '.up',
                            prevEl: '.down',
                            disabledClass: 'dissa'}}
                        mousewheel={true}
                >
                    <SwiperSlide className={'swiper-slide'}>
                        <div className={'slide'}>
                            <SlideComponent/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'slide'}>
                            <SlideComponent/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={'slide'}>
                            <SlideComponent/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </SliderWrapper>
        </Section>
    );
};

export default Testimonials;

const Section = styled.section`

  padding: 0 9.722vw;
  height: 24.722vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TitleWrapper = styled.div`
  width: 28.403vw;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .bulletss {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5.694vw;
  }

  .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 5.694vw 0.903vw 0 0.903vw;
  }

  .swiper-pagination-bullet {
    color: #E5E5E5;
    width: 0.833vw;
    height: 0.87vw;
    border-radius: 50%;
    margin: 0 0.903vw;
  }

  .swiper-pagination-bullet-active {
    background: #39425D;
  }
`
const SliderWrapper = styled.div`
  width: 46.458vw;
  height: 100%;
  position: relative;

  .slide {
    color: wheat;
    height: 24.722vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 30px;
    height: 4.931vw;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
      .dissa {
        opacity: 0.3;
      }
    .up {
      cursor: pointer;
      svg{
        fill: #3E2E4D;
        width: 1.111vw;
      }
    }

    .down {
      cursor: pointer;
      svg{
        fill: #3E2E4D;width: 1.111vw;
      }
    }
  }
`