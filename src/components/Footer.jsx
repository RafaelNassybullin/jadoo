import React from 'react';
import styled from 'styled-components'
import Iconss from '../assets/Icons/Icons'

const FooterComponent = () => {
    return (

        <Footer>
            <Logo>
                <Iconss footerLogo/>
                <p>Book your trip in minute, get full Control for much longer.</p>
            </Logo>
            <Lists>
                <List>
                    <h2>Company</h2>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                    </ul>
                </List>
                <List>
                    <h2>Contact</h2>
                    <ul>
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affilates</li>
                    </ul>
                </List>
                <List>
                    <h2>More</h2>
                    <ul>
                        <li>Airlinefees</li>
                        <li>Airline</li>
                        <li>Low fare tips</li>
                    </ul>
                </List>
            </Lists>
            <Social>
                <Icons>
                    <div className="icon">
                        <Iconss facebook/>
                    </div>
                    <div className="icon">
                        <Iconss instagramm/>
                    </div>
                    <div className="icon">
                        <Iconss twitter/>
                    </div>
                </Icons>
                <p>Discover our app</p>
                <DownLoad>
                    <button>
                        <Iconss appleicon/>
                    </button>
                    <button>
                        <Iconss androidicon/>
                    </button>
                </DownLoad>
            </Social>
        </Footer>
    );
};

export default FooterComponent;

const Footer = styled.footer`
  padding: 6.667vw 9.722vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media(max-width: 433px){
      padding: 6.667vw 2.722vw;
    flex-direction: column;
  }
`
const Logo = styled.div`
  p {
    width: 14.375vw;
    font-size: 0.903vw;
    color: #5E6282;
    font-weight: 500;
    margin-top: 1.319vw;
    @media(max-width: 433px){
      width: 85.375vw;
font-size: 5.903vw;
      margin-top: 16.319vw;
  }
  }
  @media(max-width: 433px){
      
  }
`
const Lists = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 433px){
      flex-direction: column;
    align-items: unset;
  }
`
const List = styled.div`
  margin-right: 5.000vw;
  @media(max-width: 433px){
      margin-right: unset;
  }
  h2 {
    font-size: 1.458vw;
    margin-bottom: 1.458vw;
    @media(max-width: 433px){
      font-size: 7.458vw;
margin-bottom: 7.458vw;
margin-top: 12vw;
  }
  }

  ul {
    list-style: none;
    @media(max-width: 433px){
      
  }
    li {
      font-size: 1.250vw;
      color: #5E6282;
      margin: 0.903vw 0;
      font-weight: 500;
      cursor: pointer;
      @media(max-width: 433px){
      font-size: 5.25vw;
margin: 15px 0;
  }
    }
  }
`
const Social = styled.div`
  p {
    font-size: 1.389vw;
    font-weight: 600;
    color: #5E6282;
    margin-top: 1.806vw;
    @media(max-width: 433px){
      font-size: 6.389vw;
margin-top: 11.806vw;
  }
  }
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media(max-width: 433px){
      margin-top: 17vw;
  }
  .icon {
    width: 2.847vw;
    height: 2.847vw;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0.139vw 0.694vw 0 rgba(0, 0, 0, 0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.736vw;
    @media(max-width: 433px){
      width: 21.847vw;
height: 21.847vw;
box-shadow: 0 3.139vw 4.694vw 0 rgba(0,0,0,0.10);
      margin-right: 8.736vw;
  }
    &:hover {
      background: conic-gradient(#B8D2F1, #F289AA, #C68BF0, #D164DA, #C963E8, #BFC2E8, #FFC999, #BAD0F1);
      svg {
        fill: white;
      }
    }
  }
`
const DownLoad = styled.div`
  width: 14.861vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.111vw;
  @media(max-width: 433px){
      margin-top: 18vw;
    width: 100%;
  }
  button {
    margin: 0.243vw;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    @media(max-width: 433px){
      
  }
  }
`
