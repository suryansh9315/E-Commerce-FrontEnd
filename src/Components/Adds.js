import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: teal;
`
const Text = styled.div`
    font-size: 13px;
    color: white;
    letter-spacing: 1.5px;
    @media only screen and (max-width:500px){
        font-size: 10px;
    }
`

export default function Adds() {
    return (
        <Container>
            <Text>Super Deal! Free Shipping on Orders Above $100</Text>
        </Container>
    )
}
