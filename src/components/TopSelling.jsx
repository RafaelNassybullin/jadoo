import React from 'react';
import Titles from "./Titles";
import TopSelingCards from "./TopSellingCard";
import styled from "styled-components";

const TopSelling = () => {
    return (
        <TopSellings>
            <Titles upTitle='Top Selling' title='Top Destinations'/>


            <div className="wrap-top-sellings">
                <TopSelingCards></TopSelingCards>
                <TopSelingCards></TopSelingCards>
                <TopSelingCards></TopSelingCards>
            </div>


        </TopSellings>
    );
};

export default TopSelling;

const TopSellings = styled.div`
  .wrap-top-sellings{
    display:flex;
    margin-top: 5.556vw;
    align-items:center;
    justify-content:center;
  }
`