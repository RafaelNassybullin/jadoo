import React from 'react';
import Titles from "./Titles";
import CategoryCard from "./CategoryCard";
import imag1 from '../assets/img/11.png';
import imag2 from '../assets/img/22.png';
import imag4 from '../assets/img/33.png';
import imag3 from '../assets/img/44.png';
import styled from "styled-components";


const categoryCardsData = [
        {img: imag1 , title: 'Calculated Weather ' , paragraph:'Built Wicket longer admire do barton vanity itself do in it.' },
        {img: imag2 , title: 'Best Flights' , paragraph:'Engrossed listening. Park gate sell they west hard for the.' },
        {img: imag3 , title: 'Local Events' , paragraph:'Barton vanity itself do in it. Preferd to men it engrossed listening. ' },
        {img: imag4 , title: 'Customization' , paragraph:'We deliver outsourcedaviation services for military' },
    ]

const Categories = () => {

    return (
        <>
            <Titles upTitle='CATEGORY' title='We Offer Best Services'/>
            <Wrap>
                {categoryCardsData.map((item)=><CategoryCard image={item.img} title={item.title} paragraph={item.paragraph}/>)}
            </Wrap>
        </>
    );
};

export default Categories;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.583vw 9.722vw;
`