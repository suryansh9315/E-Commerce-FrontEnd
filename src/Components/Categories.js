import styled from 'styled-components'
import React from 'react'
import { categories } from '../Data'

const Container = styled.div`
    width: 100%;
    min-height: 60vh;
    padding: 50px 0px;
`
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const Element = styled.div`
    height: 440px;
    width: 380px;
    background: linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),url(${props=>props.ImageURL});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px 20px;
`
const Title = styled.div`
    font-size: 2.5vw;
    color: white;
    margin-bottom: 20px;
    font-weight: bold;
    letter-spacing: 1px;
`
const Button = styled.div`
    outline: none;
    background-color: white;
    padding: 10px 20px;
    font-size: 17px;
    cursor: pointer;
`

export default function Categories() {
    return (
        <Container>
            <Wrapper>
                {categories.map(item=>{
                    return(
                        <Element ImageURL={item.img}>
                            <Title>{item.title}</Title>
                            <Button>SHOP NOW</Button>
                        </Element>
                    )
                })}
            </Wrapper>
        </Container>
    )
}
