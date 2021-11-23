import React,{useState} from 'react';
import styled from 'styled-components'
import Icons from "../assets/Icons/Icons";
import useWindowSize from "@rooks/use-window-size"


const Navbar = () => {

    const [addClass, setAddClass] = useState(false)
    const { innerWidth } = useWindowSize(0);

    return (
        <Navigation>
            <div className="morphi">
                <Icons bg/>

            </div>
            <Logo>
                <Icons logo/>
            </Logo>
            <Wrapper>
                <ul className={addClass?'_active':''}>
                    <li>Desitnations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                </ul>
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
            {innerWidth<=460?<div onClick={()=>setAddClass(!addClass)} className="burgir">
              {!addClass?<svg fill="white" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                     viewBox="0 0 164.97 165.6">
                    <rect className="cls-1" width="164.97" height="30.24" rx="15.12"/>
                    <rect className="cls-1" y="67.68" width="164.97" height="30.24" rx="15.12"/>
                    <rect className="cls-1" y="135.36" width="164.97" height="30.24" rx="15.12"/>
                </svg>:<svg fill="white" width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.35 97.35">
            <path d="M63.74,48.68l30-30a10.65,10.65,0,0,0,0-15.06h0a10.65,10.65,0,0,0-15.06,0l-30,30-30-30a10.65,10.65,0,0,0-15.06,0h0a10.65,10.65,0,0,0,0,15.06l30,30-30,30a10.65,10.65,0,0,0,0,15.06h0a10.65,10.65,0,0,0,15.06,0l30-30,30,30A10.65,10.65,0,0,0,93.73,78.67Z"/></svg>}
            </div>:''}
        </Navigation>
    );
};

export default Navbar;


const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.264vw 9.722vw;
  width: 100vw;

  position: absolute;
  @media (max-width: 433px) {
    padding: 2.264vw 3.722vw;
    background-color: white;
    overflow-x: clip;
    //z-index: 15;
  }

  .burgir {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    background: #e86c0c;
    z-index: 8;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 433px) {

    }
  }

  .morphi {
    position: absolute;
    width: 53.194vw;
    height: 60.556vw;
    top: -11vw;
    right: -6vw;
    z-index: -1;
    @media (max-width: 433px) {
      width: 83.194vw;
      height: 140.556vw;
    }
  }
`

const Logo = styled.div`
  cursor: pointer;
  @media (max-width: 433px) {
font-size: 20px;
  }
`



const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 433px) {

  }

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
    @media (max-width: 433px) {
      width: 21.083vw;
      height: 8.778vw;
      font-size: 4.181vw;
    }

    &:hover {
      border: 0.069vw solid #f1a501;
      color: #f1a501;
    }

    &:first-child {
      border: 0.069vw solid transparent;
      margin-left: 1.3vw;
      @media (max-width: 433px) {

      }
    }
  }

`


const Language = styled.div`
  margin-left: 2.917vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 433px) {
    display: none;
  }

  span {
    margin-left: 0.5vw;
    @media (max-width: 433px) {

    }

    svg {
      transform: translateY(-0.1vw);
      @media (max-width: 433px) {

      }
    }
  }

  h5 {
    font-size: 1.181vw;
    @media (max-width: 433px) {

    }
  }

`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 433px) {

  }
  ul{
     list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
    
  @media (max-width: 433px) {
    flex-direction: column;
    width: 100%;
    transition: 700ms;
    position: absolute;
    top: -100vh;
    left: 0;
    background: wheat;
    z-index: 7;
    height: 100vh;
    &._active{
      top: 0;
    }
  }
    
    
  li {
    margin: 0 1.597vw;
    font-weight: 500;
    cursor: pointer;
    @media (max-width: 433px) {
      font-size: 14vw;
      margin: 9vw 0;
    }
    &:hover {
      color: #f1a501;
    }
  }
}
`