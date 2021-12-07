import React from 'react'
import  styled  from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    width: 100%;
    min-height: 60vh;
    background-color: #fff5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media only screen and (max-width:750px){
        min-height: 50vh;
    }
    @media only screen and (max-width:600px){
        min-height: 30vh;
    }
`
const Title = styled.div`
    font-size: 4.5vw;
    font-weight: bold;
    margin-bottom: 10px;
    @media only screen and (max-width:750px){
        font-size: 7vw;
    }
`
const Para = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1.5px;
    @media only screen and (max-width:600px){
        font-size: 3vw;
    }
`
const Third = styled.div`
    display: flex;
`
const Input = styled.input`
    outline: none;
    height: 30px;
    width: 45vw;
    padding: 5px 10px;
    font-size: 14px;
    @media only screen and (max-width:750px){
        width: 65vw;
    }
    @media only screen and (max-width:600px){
        width: 55vw;
        height: 25px;
    }
    @media only screen and (max-width:500px){
        width: 50vw;
        height: 20px;
    }
`
const SendLogo = styled.div`
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 43.4px;
    width: 100px;
    cursor: pointer;
    margin-bottom: 40px;
    @media only screen and (max-width:600px){
        height: 39px;
    }
    @media only screen and (max-width:500px){
        height: 34px;
    }
`
export default function NewsLetter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Para>Get timely updates from your favourite products</Para>
            <Third>
                <Input placeholder="Your Email"/>
                <SendLogo>
                    <SendIcon style={{ color: 'white' }}/>
                </SendLogo>
            </Third>
        </Container>
    )
}
