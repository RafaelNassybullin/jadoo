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

  &:hover {
    box-shadow: 5px 5px 10px #d5d5d5,
      -5px -5px 10px #ebebeb;
  }

  h3 {
    color: #252940;
  }

  p {
    line-height: 1.806vw;
    width: 12.569vw;
  }
`
const Image = styled.div`
  width: 6.597vw;
  height: 6.597vw;
  background: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`