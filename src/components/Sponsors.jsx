import React from 'react';
import styled from 'styled-components'
import axon from '../assets/img/axon.png'
import jetstar from '../assets/img/jetstar.png'
import expedia from '../assets/img/expedia.png'
import qantas from '../assets/img/qantas.png'
import alitalia from '../assets/img/alitalia.png'

const imageData = [axon, jetstar, expedia, qantas, alitalia]

const Sponsors = () => {
    return (
        <Section>
            {imageData.map((item, key) => (
                <Block key={key}>
                    <Image>
                        <img src={item} alt=""/>
                    </Image>
                </Block>
            ))}
        </Section>
    );
};

export default Sponsors;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.667vw 9.722vw;
  
  @media(max-width: 433px){
      padding: 80vw 9.722vw 68.667vw 9.722vw;
    flex-direction: column;
  }

`
const Block = styled.div`
  width: 16.736vw;
  height: 5.972vw;

  border-radius: 0.694vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms ease-in-out;
  transition-property: box-shadow, background;
  @media(max-width: 433px){
      width: 52.736vw;
    height: 16.972vw;
    border-radius: 3.694vw;
    margin-bottom: 13vw;
    
    background: white;
    box-shadow:  1.389vw 1.389vw 4.167vw #bebebe,
             -1.389vw -1.389vw 4.167vw #ffffff;
  }
  &:hover {
    background: white;
    box-shadow:  1.389vw 1.389vw 4.167vw #bebebe,
             -1.389vw -1.389vw 4.167vw #ffffff;
  }
  
`
const Image = styled.div`
  width: 6.667vw;
  @media(max-width: 433px){
      width: 31.6vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`