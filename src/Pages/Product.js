import React from 'react'
import styled from 'styled-components'
import Adds from '../Components/Adds'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'

const Container = styled.div``
const Products = styled.div`
    height: 80vh;
    display: flex;
    justify-content:space-around;
    margin: 40px 40px;
`
const Left = styled.div`
    height: 100%;
    width: 40vw;
    background: url("https://i.ibb.co/S6qMxwr/jean.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`
const Right = styled.div`
    width: 45vw;
`
const Title = styled.div`
    font-size: 40px;
`
const Desc = styled.div`
    margin: 10px 0px;
    letter-spacing: 1px;
`
const Price = styled.div`
    font-size: 35px;
    margin: 10px 0px;
`
const Filter = styled.div`
    display: flex;
    margin: 20px 0px;
`
const FilterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
`
const FilterTitle = styled.div`
    font-size: 20px;
    margin-right: 10px;
`
const FilterColor = styled.div`
    display: flex;
`
const FilterColorCircle = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin-right: 10px;
    cursor: pointer;
`
const FilterSize = styled.select`
    background-color: white;
    padding: 5px 10px;
    border: none;
    font-size: 16px;
    border: 1px solid black;
    margin-right: 10px;
`
const FilterSizeOption = styled.option`
    background-color: white;
    color: black;
    border: none;
    outline: none;
`
const Cart = styled.div`
    display: flex;
    margin: 40px 0px;
`
const CartLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100px;
    margin-right: 90px;
`
const Minus = styled.div`
    font-size: 30px;
    cursor: pointer;
`
const Total = styled.div`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    border: 2px solid teal;
    border-radius: 20%;
`
const Plus = styled.div`
    font-size: 30px;
    cursor: pointer;
`
const CartRight = styled.button`
    background-color: white;
    border: 3px solid teal;
    padding: 10px 20px;
    transition: all 0.3s ease;

    &:hover{
        background-color: teal;
        color: white;
    }
`
export default function Product() {
    return (
        <Container>
            <Navbar/>
            <Adds/>
            <Products>
                <Left></Left>
                <Right>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.</Desc>
                    <Price>$ 20</Price>
                    <Filter>
                        <FilterDiv>
                            <FilterTitle>Color:</FilterTitle>
                            <FilterColor>
                                <FilterColorCircle color="red"></FilterColorCircle>
                                <FilterColorCircle color="blue"></FilterColorCircle>
                                <FilterColorCircle color="green"></FilterColorCircle>
                            </FilterColor>
                        </FilterDiv>
                        <FilterDiv>
                            <FilterTitle>Size:</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </FilterDiv>
                    </Filter>
                    <Cart>
                        <CartLeft>
                            <Minus>-</Minus>
                            <Total>1</Total>
                            <Plus>+</Plus>
                        </CartLeft>
                        <CartRight>ADD TO CART</CartRight>
                    </Cart>
                </Right>
            </Products>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
