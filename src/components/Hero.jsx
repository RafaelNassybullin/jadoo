import React from 'react';
import styled from "styled-components";
import mainImg from '../assets/img/hero-background.webp'
import Icons from "../assets/Icons/Icons";

const Hero = () => {
    return (
        <main className={'padding-9vw'}>
            <Wrapper>
                <Titles>
                    <h4>Best Destinations around the world</h4>
                    <h1>Travel, enjoy and live a new and full life
                        <span>
                            <Icons underScrach/>
                        </span>
                    </h1>
                    <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed
                        listening. Park gate sell they west hard for the.</p>
                    <div className="buttons">
                        <button>Find out more</button>
                        <button className={'watch'}>
                        <span>
                            <Icons playShape/>
                        </span>
                            Play Demo
                        </button>
                    </div>
                    <div className="plane-one">
                        <Icons plane/>
                    </div>
                    <div className="plane-two">
                        <Icons plane/>
                    </div>
                </Titles>
                <Image>
                    <img src={mainImg} alt=""/>
                </Image>
            </Wrapper>
        </main>
    );
};

export default Hero;


const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 53.056vw;
  transform: translateY(-4vw);
  @media (max-width: 433px) {
    transform: translateY(162vw);
  }

`

const Titles = styled.div`
  transform: translateY(0);
  position: relative;
  @media (max-width: 433px) {
    transform: translateY(-16vw);
  }

  h4 {
    width: 33.125vw;
    text-transform: uppercase;
    color: #DF6951;
    font-size: 1.389vw;
    @media (max-width: 433px) {
      width: 92.125vw;
      font-size: 4.389vw;
    }
  }

  h1 {
    font-size: 5.833vw;
    width: 41.847vw;
    line-height: 6.2vw;
    color: #181e4b;
    font-family: Volkhov-Regular, serif;
    margin: 1.806vw 0;
    @media (max-width: 433px) {
      font-size: 12.833vw;
      //width: 88.847vw;
      line-height: 13.2vw;
      margin: 4.806vw 0;
      width: 91.847vw;
    }

    span {
      position: absolute;
      top: 4vw;
      left: 18vw;
      z-index: -1;
      @media (max-width: 433px) {
        top: 12vw;
        left: 43vw;
      }
    }
  }

  p {
    width: 33.125vw;
    color: #5E6282;
    line-height: 3vw;
    font-size: 1.3vw;
    font-weight: 500;
    @media (max-width: 433px) {
      width: 83.125vw;
      line-height: 6vw;
      font-size: 4.3vw;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    @media (max-width: 433px) {

    }
  }

  button {
    width: 11.806vw;
    height: 4.167vw;
    outline: none;
    border: none;
    cursor: pointer;
    background: orange;
    color: white;
    @media (max-width: 433px) {
      height: 15.167vw;
      border-radius: 2.694vw;
      font-size: 5.25vw;
      margin: 5.361vw 2.3vw 2.3vw 0;
      width: 42.806vw;
    }

    border-radius: 0.694vw;
    font-size: 1.250vw;
    font-weight: 600;
    margin: 2.361vw 2.3vw 2.3vw 0;

    &:first-child {
      box-shadow: 0 0.278vw 0.278vw 0 #00000040;
      @media (max-width: 433px) {

      }
    }
  }

  .watch {

    background: transparent;
    color: #686D77;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 433px) {

    }

    span {
      width: 3.611vw;
      height: 3.611vw;
      border-radius: 50%;
      background: #DF6951;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.458vw;
      box-shadow: 0 0.278vw 0.278vw 0 #00000040;
      @media (max-width: 433px) {
        width: 12.611vw;
        height: 12.611vw;
      }

      svg {
        transform: translateX(0.11vw);
        @media (max-width: 433px) {

        }
      }

    }
  }

  .plane-one {
    position: absolute;
    top: -4vw;
    right: -12vw;
    @media (max-width: 433px) {
      top: -118vw;
      right: -1vw;
    }
  }

  .plane-two {
    position: absolute;
    top: 2vw;
    right: -45vw;
    @media (max-width: 433px) {
      top: -69vw;
      right: 67vw;
    }
  }
`

const Image = styled.div`
  width: 50.375vw;
  height: 53.056vw;
  position: absolute;
  top: 0;
  right: -5vw;
  @media (max-width: 433px) {
    width: 100.375vw;
    height: 109.056vw;
    top: -152vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 433px) {

    }
  }
`