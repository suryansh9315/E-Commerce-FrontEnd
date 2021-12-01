import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Adds from '../Components/Adds'
import Footer from '../Components/Footer'

const Container = styled.div`

`

export default function Cart() {
    return (
        <Container> 
            <Navbar/>
            <Adds/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
