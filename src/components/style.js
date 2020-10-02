
import styled from 'styled-components'


const Footer = styled.footer`
    display: flex;
    justify-content: center;
`
const StyledDiv = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: space-around;
    justify-content: center;
    @media only screen and (max-width: 500px) {
        flex-direction: column
    }
`
const StyledImg = styled.img`
    width: 40%;
    @media only screen and (max-width: 500px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h3 {
        font-family: 'Space Mono', monospace;
        font-color: #333333;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 95px;
        letter-spacing: -0.035em;
    }
    p {
        height:108px;
        font-color: #4F4F4F;
        font-family: 'Space Mono', monospace;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.035em
    }
    @media only screen and (max-width: 500px) {
       padding: 10px;
       h3 {
        font-family: 'Space Mono', monospace;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 71px;
            letter-spacing: -0.035em;
       }
    }
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: 30px;
    background-color: #333333;
    color: #fff;
    font-family: 'Space Mono', monospace;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 22px;
    padding: 25px;
    transition: background-color 1s;
    @media only screen and (max-width: 500px) {
        width: 180px;
        height: 40px;
    }
    hover {
        background-color: #fff;
        border: 3px solid #333;
        color: #333;
        transition: all 0.2s;
    }
`
const Header = styled.div`
    margin: 30px;
   h1 { 
    font-family: Inconsolata;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -0.08em;
    text-transform: uppercase;
   }
`
export  { StyledImg , StyledDiv, Wrapper, Header, Button, Footer };