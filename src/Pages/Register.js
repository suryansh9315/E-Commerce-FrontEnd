import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ),url("https://cdn.pixabay.com/photo/2016/11/22/10/47/woman-1848949_1280.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`
const Box = styled.div`
    padding: 10px 20px;
    width: 40%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width:800px){
        width: 60%;
    }
`
const Title = styled.div`
    font-size: 30px;
    margin: 20px 0px;
    text-align: center;
    @media only screen and (max-width:800px){
        font-size: 25px;
    }
    @media only screen and (max-width:500px){
        font-size: 21px;
    }
`

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    font-size: 14px;
    padding: 10px 10px;
    min-width: 43%;
    outline: none;
    margin: 10px 0px;
    margin-right: 10px;
    @media only screen and (max-width:1192px){
        min-width: 75%;
    }
    @media only screen and (max-width:800px){
        min-width: 75%;
        margin: 5px 0px;
    }
    @media only screen and (max-width:500px){
        min-width: 85%;
        margin: 5px 0px;
    }
`
const Policy = styled.div`
    font-size: 16px;
    margin: 20px 0px;
    min-width: 43%;
    @media only screen and (max-width:800px){
        font-size: 13px;
    }
`
const Button = styled.div`
    background-color: white;
    border: 3px solid teal;
    padding: 10px 20px;
    transition: all 0.3s ease;
    width: 40%;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover{
        background-color: teal;
        color: white;
    }
`
export default function Register() {
    return (
        <Container>
            <Box>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name"></Input>
                    <Input placeholder="Last Name"></Input>
                    <Input placeholder="Username"></Input>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Password"></Input>
                    <Input placeholder="Confirm Password"></Input>
                </Form>
                <Policy> By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>.</Policy>
                <Button>CREATE</Button>
            </Box>
        </Container>
    )
}