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
`
const Title = styled.div`
    font-size: 4.5vw;
    font-weight: bold;
    margin-bottom: 10px;
`
const Para = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1.5px;
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
