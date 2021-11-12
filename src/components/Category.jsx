import React from 'react';
import Titles from "./Titles";
import CategoryCard from "./CategoryCard";
import imag1 from '../assets/img/11.png'
import imag2 from '../assets/img/22.png'
import imag4 from '../assets/img/33.png'
import imag3 from '../assets/img/44.png'
import styled from "styled-components";

const Categories = () => {
    return (
        <div>
            <Titles upTitle='CATEGORY' title='We Offer Best Services'/>
<Wrap >
    <CategoryCard image={imag1}/>
    <CategoryCard image={imag2}/>
    <CategoryCard image={imag3}/>
    <CategoryCard image={imag4}/>
</Wrap>

        </div>
    );
};

export default Categories;

const Wrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 4.583vw 9.722vw;
`