import React from 'react';
import styled from 'styled-components'

const CategoryCard = (props) => {
    return (
        <Wrapper>
            <Image>
                <img src={props.image} alt=""/>
            </Image>
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
        </Wrapper>
    );
};

export default CategoryCard;


const Wrapper = styled.div`
  width: 18.542vw;
  height: 21.806vw;
  background: white;
  cursor: pointer;
  border-radius: 2.500vw;
  display: flex;
  color: #5E6282;
  align-items: center;
  justify-content: space-between;
  padding: 2.9vw;
  flex-direction: column;
  text-align: center;
  transition: 300ms ease-in-out;
  transition-property: box-shadow;
  @media (max-width: 433px) {
    width: 51.542vw;
    height: 56.806vw;
    
    border-radius: 6.5vw;
    margin: 11vw 0;
   box-shadow: 0px 12px 46px 0px rgba(184, 184, 184, 0.5);
-webkit-box-shadow: 0px 12px 46px 0px rgba(184, 184, 184, 0.5);
  }

  &:hover {
    box-shadow: 0.347vw 0.347vw 0.694vw #d5d5d5,
      -0.347vw -0.347vw 0.694vw #ebebeb;
  }

  h3 {
    color: #252940;
    @media (max-width: 433px) {
      font-size: 5vw;
    }
  }

  p {
    line-height: 1.806vw;
    width: 12.569vw;
    @media (max-width: 433px) {
      width: 34.569vw;
      line-height: unset;
      font-size: 4vw;
    }
  }
`
const Image = styled.div`
  width: 6.597vw;
  height: 6.597vw;
  background: white;
  @media (max-width: 433px) {
    width: 19.597vw;
    height: 19.597vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`