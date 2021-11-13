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
  margin: 2.361vw;
  cursor:pointer;
  color: #5E6282;
  position: relative;
  box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.5);

  h3 {
    font-size: 1.111vw;
    line-height: 2.222vw;
    font-weight: 500;
  }

  h4 {
    font-size: 1.250vw;
    font-weight: 600;
    margin-top: 2.361vw;
  }

  h5 {
    font-size: 0.972vw;
    font-weight: 400;
    margin-top: 0.694vw;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`