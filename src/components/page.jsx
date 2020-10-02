import React from 'react';

import Scaredcrow from "../Scarecrow.png"

import  { StyledDiv, StyledImg, Wrapper, Header, Button, Footer } from './style';


const Page = () => {
    return(
        <>
        <Header><h1>404 NOT FOUND</h1></Header>
        <StyledDiv>
            <StyledImg src={Scaredcrow} alt="Logo" />
            <Wrapper>
                <h3> I have bad news for you</h3>
                <p>The page you are looking for might be removed or is temporarily unavailable</p>
                <Button role="button" tabIndex="0"> Back to HomePage</Button>
            </Wrapper>
        </StyledDiv>
        <Footer>
            <p>
            <a href="https://github.com/ashishcas">ashishcas</a>
            @DevChallenges.io
            </p>
        </Footer>

        </>
    );

}

export default Page;