import React from 'react';
import Titles from "./Titles";
import styled from 'styled-components'
import EasyCardComponent from "./EasyCard";
import Icons from "../assets/Icons/Icons";

const Easy = () => {
    return (
        <Section>
            <TitleWrap>
                <Titles upTitle='Easy and Fast'
                        title='Book your next trip in 3 easy steps'
                        styleText='left'
                        styleCenter='flex-start'
                />
                <Instruction>
                    <div className="instruction-block">
                        <Image>
                            <Icons square/>
                        </Image>
                        <Text>
                            <h4>Choose Destination</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </Text>
                    </div>
                    <div className="instruction-block">
                        <Image>

                            <Icons swim/>
                        </Image>
                        <Text>
                            <h4>Choose Destination</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </Text>
                    </div>
                    <div className="instruction-block">
                        <Image>
                            <Icons car/>
                        </Image>
                        <Text>
                            <h4>Choose Destination</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </Text>
                    </div>
                </Instruction>
            </TitleWrap>
            <Card>
                <div className="blue-shadow">
                    <Icons blueShadow/>
                </div>
                <EasyCardComponent/>
            </Card>
        </Section>
    );
};

export default Easy;

const Section = styled.section`
  padding: 0 9.722vw;
  margin-top: 12.917vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9vw;
  @media (max-width: 433px) {
    padding: 0;
    flex-direction: column;
    height: 246vw;
  }
`
const TitleWrap = styled.div`
  width: 35.486vw;
  @media (max-width: 433px) {
    width: 93.486vw;
  }
`
const Card = styled.div`
  width: 33.681vw;
  height: 31.875vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  @media (max-width: 433px) {
    width: 92.681vw;
  }

  .blue-shadow {
    position: absolute;
    top: -10vw;
    right: -7vw;
    z-index: -1;
    @media (max-width: 433px) {

          top: -102vw;
    right: -9vw;
      
      
      //top: -81vw;
      //right: -10vw;
    }
  }

`
const Instruction = styled.div`
  color: #5E6282;
  font-size: 1.111vw;

  .instruction-block {
    width: 26.736vw;
    display: flex;
    justify-content: center;
    margin-top: 2.708vw;
    @media (max-width: 433px) {
      width: 92.736vw;
      margin-top: 9.708vw;
    }
  }
`
const Image = styled.div`
  margin-right: 1.458vw;
  @media (max-width: 433px) {
    margin-right: 4.458vw;
  }
`
const Text = styled.div`
  h4 {
    font-size: 1.250vw;
    @media (max-width: 433px) {
      font-size: 5.25vw;
    }
  }

  p {
    line-height: 124%;
    margin-top: 0.347vw;
    @media (max-width: 433px) {
      font-size: 4vw;
      
      
    }
  }
`