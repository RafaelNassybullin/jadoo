import React from 'react';
import Titles from "./Titles";
import CategoryCard from "./CategoryCard";
import imag1 from '../assets/img/11.png';
import imag2 from '../assets/img/22.png';
import imag4 from '../assets/img/33.png';
import imag3 from '../assets/img/44.png';
import styled from "styled-components";
import Icons from "../assets/Icons/Icons";


const categoryCardsData = [
    {
        img: imag1,
        title: 'Calculated Weather ',
        paragraph: 'Built Wicket longer admire do barton vanity itself do in it.'
    },
    {img: imag2, title: 'Best Flights', paragraph: 'Engrossed listening. Park gate sell they west hard for the.'},
    {
        img: imag3,
        title: 'Local Events',
        paragraph: 'Barton vanity itself do in it. Preferd to men it engrossed listening. '
    },
    {img: imag4, title: 'Customization', paragraph: 'We deliver outsourcedaviation services for military'},
]

const Categories = () => {

    return (
        <Section>
            <div className="plus-down">
                <Icons plusDown/>
            </div>
            <Titles upTitle='CATEGORY' title='We Offer Best Services'/>
            <Wrap>
                {categoryCardsData.map((item) => <CategoryCard image={item.img} title={item.title} paragraph={item.paragraph}/>)}
            </Wrap>
        </Section>
    );
};

export default Categories;

const Section = styled.section`
  position: relative;
  .plus-down {
    position: absolute;
    top: 0;
    right: 4.028vw;
  }
`
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.583vw 9.722vw;
`
