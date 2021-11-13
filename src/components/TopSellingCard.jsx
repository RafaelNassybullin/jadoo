import React from 'react';
import styled from 'styled-components'

const TopSelingCards = ({images, titles, price, days}) => {
    return (
        <CardWrap>
            <img src={images} alt=""/>
            <Texts>
                <Price>
                    <h4>{titles}</h4>
                    <h3>{price}</h3>
                </Price>
                <Days>
                    <span className={'navigator'}>
                        <svg width="1.250vw" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0682 1.76033L10.1932 16.7603C10.1357 16.886 10.0381 16.989 9.91582 17.0533C9.7935 17.1177 9.65332 17.1396 9.5172 17.1158C9.38108 17.092 9.25669 17.0237 9.16348 16.9217C9.07028 16.8197 9.01352 16.6896 9.00208 16.5519L8.42083 9.57896L1.44789 8.99771C1.31017 8.98627 1.18013 8.92951 1.0781 8.8363C0.976073 8.7431 0.90781 8.61871 0.88399 8.48258C0.860169 8.34646 0.882135 8.20628 0.946451 8.08397C1.01077 7.96166 1.11381 7.86411 1.23945 7.80658L16.2395 0.93158C16.3554 0.878438 16.4849 0.862048 16.6104 0.884614C16.736 0.907179 16.8516 0.967618 16.9418 1.05781C17.032 1.14801 17.0924 1.26365 17.115 1.38919C17.1375 1.51474 17.1212 1.64418 17.068 1.76014L17.0682 1.76033Z" fill="#080809"/></svg>
                    </span> {days} Days Trip</Days>
            </Texts>
        </CardWrap>
    );
};

export default TopSelingCards;

const CardWrap = styled.div`
  overflow: hidden;
  width: 21.875vw;
  height: 31.736vw;
  position: relative;
  border-radius: 1.667vw;
  transition: 300ms ease-in-out;
  cursor: pointer;
  transition-property: box-shadow;

  &:hover {
    box-shadow: 18px 18px 36px #d1d1d1,
      -18px -18px 36px #ffffff;
  }

  img {
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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 1.250vw;
  color: #5E6282;
`
const Price = styled.div`
  margin-bottom: 1.458vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Days = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;

  .navigator {
    margin-right: 1vw;
    transform: translateY(0.208vw);
  }
`