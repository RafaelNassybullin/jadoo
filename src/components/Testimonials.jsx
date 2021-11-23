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
                        pagination={{
                            clickable: true,
                            el: '.bulletss'
                        }}
                        navigation={{
                            clickable: true,
                            nextEl: '.up',
                            prevEl: '.down',
                            disabledClass: 'dissa'
                        }}
                        mousewheel={true}
                        loop={true}
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
  
  
  @media(max-width: 433px){
   flex-direction: column;   
    margin-top: 42vw;
    height: 96vw;//////////
  }
`
const TitleWrapper = styled.div`
  width: 28.403vw;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media(max-width: 433px){
      width: 93vw;
  }
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
    @media(max-width: 433px){
        width: 3.833vw;
    height: 3.87vw;
      margin: 0 1.7vw;
    }
  }

  .swiper-pagination-bullet-active {
    background: #39425D;
  }
`
const SliderWrapper = styled.div`
  width: 46.458vw;
  height: 100%;
  position: relative;
  @media (max-width: 433px) {
    height: 84vw;
    width: 93vw;
  }

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
    font-size: 1.250vw;
    //background: #db8383;
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
    @media (max-width: 433px) {
      -webkit-box-align: unset;
      -ms-flex-align: unset;
      -webkit-align-items: unset;
      align-items: unset;
    }
  }

  .navigation {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 2.083vw;
    height: 4.931vw;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    @media(max-width: 433px){
    top: 42vw;
    right: 46vw;
    height: 84.931vw;
    }
    .dissa {
      opacity: 0.3;
    }

    .up {
      cursor: pointer;

      svg {
        fill: #3E2E4D;
        width: 1.111vw;
        @media(max-width: 433px){
            width: 10.111vw;
        }
      }
    }

    .down {
      cursor: pointer;

      svg {
        fill: #3E2E4D;
        width: 1.111vw;
        @media(max-width: 433px){
            width: 10.111vw;
        }
      }
    }
  }
`