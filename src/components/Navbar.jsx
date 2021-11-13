import React from 'react';
import styled from 'styled-components'
import Icons from "../assets/Icons/Icons";

const Navbar = () => {
    return (
        <Navigation>
            <div className="morphi">
                <Icons bg/>
            </div>
            <Logo>
                <Icons logo/>
            </Logo>
            <Wrapper>
                <List>
                    <li>Desitnations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                </List>
                <Auth>
                    <button>Login</button>
                    <button>Sign up</button>
                    <Language>
                        <h5>EN</h5>
                        <span>
                            <Icons arrow/>
                        </span>
                    </Language>
                </Auth>
            </Wrapper>
        </Navigation>
    );
};

export default Navbar;


const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.264vw 9.722vw;
  width: 100%;
  position: absolute;
  .morphi{
    position: absolute;
    width: 53.194vw;
    height: 60.556vw;
    top: -11vw;
    right: -6vw;
    z-index: -1;
  }
`

const Logo = styled.div`
  cursor: pointer;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    margin: 0 1.597vw;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: #f1a501;
    }
  }
`

const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 7.083vw;
    height: 2.778vw;
    background: transparent;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    border: 0.069vw solid black;
    border-radius: 0.347vw;
    font-size: 1.181vw;
    font-weight: 500;

    &:hover {
      border: 0.069vw solid #f1a501;
      color: #f1a501;
    }

    &:first-child {
      border: 0.069vw solid transparent;
      margin-left: 1.3vw;
    }
  }

`

const Language = styled.div`
  margin-left: 2.917vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    margin-left: 0.5vw;

    svg {
      transform: translateY(-0.1vw);
    }
  }

  h5 {
    font-size: 1.181vw;

  }

`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`