import React from 'react';
import styled from 'styled-components'
import rome from '../assets/img/e49e57046b9c9bf320fe245919168bb0.png'
const TopSelingCards = () => {
    return (
        <CardWrap>

                <img src={rome} alt=""/>

            <Texts>
                <Price>
                    <h4>Rome, Italty</h4>
                    <h3>$5,42k</h3>
                </Price>
                <Days><span>1  </span>10 Days Trip</Days>
            </Texts>
        </CardWrap>
    );
};

export default TopSelingCards;

const CardWrap = styled.div`
  overflow: hidden;
  margin: 1.319vw;
  width: 21.875vw;
  height: 31.736vw;
  position: relative;
  border-radius: 1.667vw;
  background: pink;box-shadow: 0 0.278vw 0.278vw 0 #00000040;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Texts = styled.div`
  width: 100%;
  height: 9.028vw;
  background: #ffffff;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2.778vw 1.389vw;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction: column;
`
const Price = styled.div`
  margin-bottom:1.458vw ;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
h4{
  
}
  h3{
    
  }
`
const Days = styled.div`

`