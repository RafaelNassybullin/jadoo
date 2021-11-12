import React from 'react';
import styled from 'styled-components'
const CategoryCard = (props) => {
    return (
        <Wrapper>
            <Image>
                <img src={props.image} alt=""/>
            </Image>
            <h3>Best Flights</h3>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
        </Wrapper>
    );
};

export default CategoryCard;


const Wrapper = styled.div`
  width: 18.542vw;
  height: 21.806vw;
  background: white;
  border-radius: 2.500vw;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 2.986vw ;
  flex-direction: column;
  text-align: center;
  transition: 300ms ease-in-out;
  &:hover{
    box-shadow:  5px 5px 10px #d5d5d5,
             -5px -5px 10px #ebebeb;
  }
  
h3{
  
}
  p{
    
  }
`
const Image = styled.div`
  width: 6.597vw;
  height: 6.597vw;
  background: white;
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
  
`