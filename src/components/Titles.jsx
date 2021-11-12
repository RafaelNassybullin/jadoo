import React from 'react';
import styled from 'styled-components'
const Titles = (props) => {
    return (
        <>
            <Title style={{textAlign:props.styleText, alignItems:props.styleCenter}}>
                <h3>{props.upTitle}</h3>
                <h1>{props.title}</h1>
            </Title>
        </>
    );
};

export default Titles;


const Title = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content:center;
  flex-direction: column;
  text-align: center;
  h3{
    color: #5E6282;
    text-transform: capitalize;
    font-size: 1.250vw;
  }
  h1{
    font-family: Volkhov-Regular, sans-serif;
    color: #181e4b;
    font-size: 3.472vw;
    text-transform: capitalize;
    margin-top: 1.042vw;
  }
`