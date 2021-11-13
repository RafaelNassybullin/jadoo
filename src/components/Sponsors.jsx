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
            {imageData.map((item) => (
                <Block>
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

  &:hover {
    background: white;
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
  }
  
`
const Image = styled.div`
  width: 6.667vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`