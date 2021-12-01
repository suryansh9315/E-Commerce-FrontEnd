import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Adds from '../Components/Adds'
import Footer from '../Components/Footer'

const Container = styled.div``
const Items = styled.div`
    width: 100%;
    background-color: #EAEDED;
    display: flex;
    justify-content: center;
    min-height: 50vh;
`
const Left = styled.div`
    flex: 3;
    margin: 30px 5px;
    background-color: white;
    padding: 10px 20px;
    height: 100%;
`
const Title = styled.div`
    font-size: 30px;
    letter-spacing: 1px;
    margin: 20px 0px;
`
const ItemList = styled.div`
    display: flex;
    margin: 20px 0px;
    border-bottom: 1px solid black;
    padding: 10px 0px;
`
const ItemLeft = styled.div`
    flex: 2;
`
const ItemImage = styled.div`
    height: 40vh;
    background: url(${props=>props.url});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`
const ItemRight = styled.div`
    flex: 3;
    padding: 20px 20px;
    padding-top: 0px;
`
const ItemTitle = styled.div`
    font-size: 30px;
    margin-bottom: 15px;
`
const ItemSize = styled.div`
    margin-bottom: 15px;
    font-size: 20px;
`
const ItemQty = styled.select`
    margin-bottom: 20px;
    font-size: 18px;
    padding: 7px 20px;
    background-color: white;
    border: none;
    border: 2px solid black;
`
const ItemQtyOption = styled.option``
const ItemTotal = styled.div`
    font-size: 20px;
`
const Right = styled.div`
    flex: 2;
    height: 40vh;
    margin: 30px 10px;
    background-color: white;
    padding: 10px 20px;
`
const RightList = styled.div``
const RightListItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
`
const RightListItemText = styled.div``
const RightListItemPrice = styled.div``
const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
`
const TotalText = styled.div``
const TotalPrice = styled.div``
const Button = styled.button`
    background-color: white;
    border: 2px solid teal;
    padding: 10px 20px;
    transition: all 0.3s ease;
    width: 50%;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
    margin-top: 20px;

    &:hover{
        background-color: teal;
        color: white;
    }
`
export default function Cart() {
    return (
        <Container> 
            <Navbar/>
            <Adds/>
            <Items>
                <Left>
                    <Title>SHOPPING CART</Title>
                    <hr style={{opacity:"0.5"}}/>
                    <ItemList>
                        <ItemLeft>
                            <ItemImage url="https://m.media-amazon.com/images/I/71i9WukRkKL._AC_AA360_.jpg"></ItemImage>
                        </ItemLeft>
                        <ItemRight>
                            <ItemTitle>American Tourister</ItemTitle>
                            <ItemSize>Size : XL</ItemSize>
                            <ItemQty>
                                <ItemQtyOption>0</ItemQtyOption>
                                <ItemQtyOption>1</ItemQtyOption>
                                <ItemQtyOption>2</ItemQtyOption>
                                <ItemQtyOption>3</ItemQtyOption>
                                <ItemQtyOption>4</ItemQtyOption>
                                <ItemQtyOption>5</ItemQtyOption>
                            </ItemQty>
                            <ItemTotal>Total : $ 50</ItemTotal>
                        </ItemRight>
                    </ItemList>
                    <ItemList>
                        <ItemLeft>
                            <ItemImage url="https://m.media-amazon.com/images/I/91FvDEE9sCL._AC_AA360_.jpg"></ItemImage>
                        </ItemLeft>
                        <ItemRight>
                            <ItemTitle>American Tourister</ItemTitle>
                            <ItemSize>Size : XL</ItemSize>
                            <ItemQty>
                                <ItemQtyOption>0</ItemQtyOption>
                                <ItemQtyOption>1</ItemQtyOption>
                                <ItemQtyOption>2</ItemQtyOption>
                                <ItemQtyOption>3</ItemQtyOption>
                                <ItemQtyOption>4</ItemQtyOption>
                                <ItemQtyOption>5</ItemQtyOption>
                            </ItemQty>
                            <ItemTotal>Total : $ 50</ItemTotal>
                        </ItemRight>
                    </ItemList>
                    <ItemList>
                        <ItemLeft>
                            <ItemImage url="https://m.media-amazon.com/images/I/61yZLAaNbwL._AC_AA360_.jpg"></ItemImage>
                        </ItemLeft>
                        <ItemRight>
                            <ItemTitle>American Tourister</ItemTitle>
                            <ItemSize>Size : XL</ItemSize>
                            <ItemQty>
                                <ItemQtyOption>0</ItemQtyOption>
                                <ItemQtyOption>1</ItemQtyOption>
                                <ItemQtyOption>2</ItemQtyOption>
                                <ItemQtyOption>3</ItemQtyOption>
                                <ItemQtyOption>4</ItemQtyOption>
                                <ItemQtyOption>5</ItemQtyOption>
                            </ItemQty>
                            <ItemTotal>Total : $ 50</ItemTotal>
                        </ItemRight>
                    </ItemList>
                </Left>
                <Right>
                    <Title>ORDER SUMMARY</Title>
                    <RightList>
                        <RightListItem>
                            <RightListItemText>Subtotal</RightListItemText>
                            <RightListItemPrice>$ 50</RightListItemPrice>
                        </RightListItem>
                        <RightListItem>
                            <RightListItemText>Shipping Charges</RightListItemText>
                            <RightListItemPrice>$ 5</RightListItemPrice>
                        </RightListItem>
                        <RightListItem>
                            <RightListItemText>Total Discount</RightListItemText>
                            <RightListItemPrice>$ 10</RightListItemPrice>
                        </RightListItem>
                    </RightList>
                    <Total>
                        <TotalText>Total</TotalText>
                        <TotalPrice>$ 45</TotalPrice>
                    </Total>
                    <Button>Checkout Now</Button>
                </Right>
            </Items>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
