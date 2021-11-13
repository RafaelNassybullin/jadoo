import React from 'react';
import styled from 'styled-components'
import Icons from "../assets/Icons/Icons";

const Subscribe = () => {
    return (
        <Section>
            <Block>
                <Title>
                    <h1>Subscribe to get information, latest news and other interesting offers about Cobham</h1>
                </Title>
                <InputWrap>
                    <div className={'input-wraper'}>
                        <div className="icon">
                            <svg height="1.250vw" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                                      stroke="#39425D" strokeLinecap="round"/>
                                <rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D"/>
                            </svg>
                        </div>
                        <input type="text" placeholder='Your email'/>
                    </div>
                    <button>Subscribe</button>
                </InputWrap>
                 <div className="left-spiral">
                <Icons leftSpiral/>
            </div>
            <div className="right-spiral">
                <Icons rightSpiral/>
            </div>
                <div className="planeCircle">
                    <Icons planeCircle/>
                </div>
                <div className="plus-up">
                    <Icons plusUp/>
                </div>
            </Block>
        </Section>
    );
};

export default Subscribe;

const Section = styled.section`
  padding: 0 9.722vw;
  margin-bottom: 11.528vw;
  
`
const Block = styled.div`
  background: #F9F7FE;position: relative;
  height: 28.264vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8.958vw 1.389vw 1.389vw 1.389vw;
  .left-spiral{
    position: absolute;
    left: 0;
    bottom: 0;
    margin-left: 1.319vw;
  }
  .right-spiral{
    position: absolute;
    right: -0.3vw;
    top: 0;
  }
  .planeCircle{
    position: absolute;
    right: -2.431vw;
    top: -2.431vw;
  }
  .plus-up{
    position: absolute;
    right: -6.3vw;
    bottom: -5vw;
  }
`
const Title = styled.div`
  z-index: 3;
  h1 {
    color: #5E6282;
    font-size: 2.292vw;
    width: 59.653vw;
    text-align: center;
    line-height: 3.750vw;
    margin-bottom: 5.139vw;
    z-index: 3;
  }
`
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  .input-wraper {
    height: 4.722vw;
    width: 29.236vw;
    background: white;
    display: flex;
    padding: 0 2.153vw;
    justify-content: flex-start;
    align-items: center;
    margin-right: 1.667vw;
    border-radius: 0.694vw;

    input {
      outline: none;
      border: none;
      background: transparent;
      width: 20.278vw;
      font-size: 0.972vw;
      
    }

    .icon {
      margin-right: 0.972vw;
      transform: translateY(.2vw);
    }
  }

  button {
    width: 12.500vw;
    height: 4.722vw;
    background: linear-gradient(180deg, #FF946D, #FF7D68);
    outline: none;
    border: none;
    border-radius: 0.694vw;
    color: white;
    font-size: 1.181vw;
    font-weight: 600;
  }
`