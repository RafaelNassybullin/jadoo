import React, {useState} from 'react';
import styled from 'styled-components'
import cardImage from '../assets/img/cardImage.jpg'
import Icons from "../assets/Icons/Icons";

const EasyCardComponent = () => {
    const [toggle, setToggle] = useState(true)
    const handle = () => {
        setToggle(!toggle)
    }
    return (
        <EasyCardWrap>
            <div>
                <Image>
                    <img src={cardImage} alt=""/>
                </Image>
                <Text>
                    <h3>Trip To Greece</h3>
                    <h4><span>14-29 June</span> | by Robbin joseph </h4>
                    <div className="icons">
                        <div className="icon">
                            <Icons leaf/>
                        </div>
                        <div className="icon">
                            <Icons map/>
                        </div>
                        <div className="icon">
                            <Icons nav/>
                        </div>
                    </div>
                    <div className="peoples">
                        <div className="people-count">
                            <span>
                                <Icons building/>
                            </span>
                            <p>24 people going</p>
                        </div>
                        <div className="heart" onClick={()=>handle()}>
                            {toggle ? <Icons blueHeart/> : <Icons redHeart/>}
                        </div>
                    </div>
                </Text>
            </div>
        </EasyCardWrap>
    );
};
// 25.694vw
export default EasyCardComponent;
const EasyCardWrap = styled.div`
  width: 25.694vw;
  height: 27.778vw;
  border-radius: 1.806vw;
  padding: 1.736vw;
  background: white;
  box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.5);
`

const Image = styled.div`
  width: 100%;
  height: 11.181vw;
  border-radius: 1.667vw;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Text = styled.div`
  margin-top: 1.806vw;
  width: 100%;
  height: 11.250vw;
  color: #84829A;

  h3 {
    margin-bottom: 1vw;
    color: black;
  }

  h4 {
    font-weight: 500;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1.6vw 0;
    .leaf{
      width: 0.972vw;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.500vw;
      height: 2.500vw;
      background: #F5F5F5;
      border-radius: 50%;
      margin-right: 1.250vw;
      cursor: pointer;

    }

  }

  .peoples {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .heart {
      width: 1.3vw;
      height: 1.3vw;
      cursor: pointer;
    }

    .people-count {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        margin-left: 1.042vw;
        font-weight: 500;
      }
    }
  }

`
