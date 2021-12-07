import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),url("https://cdn.pixabay.com/photo/2019/11/03/05/36/portrait-4597853_1280.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`
const Box = styled.div`
    min-height: 40vh;
    padding: 10px 10px;
    width: 40%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width:1000px){
        width: 50%;
    }
    @media only screen and (max-width:600px){
        width: 60%;
    }
`
const Title = styled.div`
    font-size: 30px;
    margin: 20px 0px;
    text-align: center;
`
const Form = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    font-size: 14px;
    padding: 10px 10px;
    width: 100%;
    outline: none;
    margin: 10px 0px;
    @media only screen and (max-width:600px){
        margin: 5px 0px;
    }
`
const Link = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin: 5px 0px;
    @media only screen and (max-width:600px){
        font-size: 13px;
        margin: 2px 0px;
    }
`
const Button = styled.div`
    background-color: white;
    border: 3px solid teal;
    padding: 10px 20px;
    transition: all 0.3s ease;
    width: 30%;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
    margin-top: 20px;
    @media only screen and (max-width:600px){
        margin-bottom: 10px;
        margin-top: 10px;
        padding: 7px 10px;
    }

    &:hover{
        background-color: teal;
        color: white;
    }
`
export default function Login() {
    return (
        <Container>
            <Box>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Password"></Input>
                </Form>
                <Button>LOGIN</Button>
                <Link>Forget Password</Link>
                <Link>Create an Account</Link>
            </Box>
        </Container>
    )
}
