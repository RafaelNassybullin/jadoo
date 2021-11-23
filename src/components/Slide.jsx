import React from 'react';
import styled from 'styled-components'

import avatar from '../assets/img/avatar-slide.jpg'

const SlideComponent = () => {
    return (
        <SlideItem>
            <Image>
                <img src={avatar} alt=""/>
            </Image>
            <h3>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew
                next. Of believed or diverted no.”</h3>
            <h4>Mike Taylor</h4>
            <h5>Lahore, Pakistan</h5>
        </SlideItem>
    );
};

export default SlideComponent;

const SlideItem = styled.div`
  width: 35.000vw;
  height: 17.014vw;
  background: #ffffff;
  border-radius: 0.694vw;
  padding: 1.944vw 2.361vw;
  margin: 3vw;
  cursor:pointer;
  color: #5E6282;
  position: relative;
  //background: blue;
  box-shadow: 0 0.833vw 2.778vw -0.556vw rgba(0, 0, 0, 0.5);
-webkit-box-shadow: 0 0.833vw 2.778vw -0.556vw rgba(0, 0, 0, 0.5);
  @media(max-width: 433px){
    width: 78vw;
    height: 64vw;
    margin: 9.3vw;
    border-radius: 4.6vw;
    padding: 7.944vw 5.361vw;
    box-shadow:  1.389vw 1.389vw 4.167vw #bebebe,
             -1.389vw -1.389vw 4.167vw #ffffff;
  }
  h3 {
    font-size: 1.111vw;
    line-height: 2.222vw;
    font-weight: 500;
    @media(max-width: 433px){
        font-size: 4.9vw;
    margin-bottom: 12vw;
    line-height: unset;
    }
  }

  h4 {
    font-size: 1.250vw;
    font-weight: 600;
    margin-top: 2.361vw;
    @media(max-width: 433px){
        font-size: 5.25vw;
    font-weight: 600;
    margin-top: 2.361vw;
    }
  }

  h5 {
    font-size: 0.972vw;
    font-weight: 400;
    margin-top: 0.694vw;
    @media(max-width: 433px){
        font-size: 3.972vw;
    font-weight: 400;
    margin-top: 0.694vw;
    }
  }
`
const Image = styled.div`
  width: 4.722vw;
  height: 4.722vw;
  border-radius: 50%;
  position: absolute;
  top: -2.361vw;
  left: -2.361vw;
  overflow: hidden;
  @media(max-width: 433px){
      width: 13.722vw;
    height: 13.722vw;
    top: -6.361vw;
    left: -6.361vw;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`