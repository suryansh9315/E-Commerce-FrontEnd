import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Adds from '../Components/Adds'
import Footer from '../Components/Footer'
import StripeCheckout from 'react-stripe-checkout';
import { useEffect,useState } from 'react'

const Container = styled.div``
const Items = styled.div`
    width: 100%;
    background-color: #EAEDED;
    display: flex;
    justify-content: center;
    min-height: 45vh;
    @media only screen and (max-width:1000px){
        flex-direction: column;
    }
`
const Left = styled.div`
    flex: 3;
    margin: 30px 5px;
    background-color: white;
    padding: 10px 20px;
    height: 100%;
    @media only screen and (max-width:1000px){
        margin: 10px 5px;
    }
`
const Title = styled.div`
    font-size: 30px;
    letter-spacing: 1px;
    margin: 20px 0px;
    @media only screen and (max-width:500px){
        font-size: 25px;
    }
`
const ItemList = styled.div`
    display: flex;
    margin: 20px 0px;
    border-bottom: 1px solid black;
    padding: 10px 0px;
`
const ItemLeft = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ItemImage = styled.div`
    height:240px;
    width:200px;
    background: url(${props=>props.url});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media only screen and (max-width:1000px){
        height:260px;
        width:240px;
    }
    @media only screen and (max-width:600px){
        height:220px;
        width:200px;
    }
    @media only screen and (max-width:500px){
        height:180px;
        width:160px;
    }
    @media only screen and (max-width:420px){
        height:160px;
        width:140px;
    }
`
const ItemRight = styled.div`
    flex: 3;
    padding: 20px 20px;
    padding-top: 0px;
`
const ItemTitle = styled.div`
    font-size: 30px;
    margin-bottom: 15px;
    @media only screen and (max-width:600px){
        font-size: 23px;
    }
    @media only screen and (max-width:500px){
        font-size: 20px;
        margin-bottom: 10px;
    }
    @media only screen and (max-width:400px){
        font-size: 16px;
    }
`
const ItemSize = styled.div`
    margin-bottom: 15px;
    font-size: 20px;
    @media only screen and (max-width:600px){
        font-size: 18px;
    }
    @media only screen and (max-width:500px){
        font-size: 14px;
        margin-bottom: 10px;
    }
`
const ItemQty = styled.select`
    margin-bottom: 20px;
    font-size: 18px;
    padding: 7px 20px;
    background-color: white;
    border: none;
    border: 2px solid black;
    @media only screen and (max-width:600px){
        font-size: 14px;
        padding: 5px 10px;
    }
    @media only screen and (max-width:500px){
        font-size: 12px;
        padding: 4px 8px;
        margin-bottom: 10px;
    }
`
const ItemQtyOption = styled.option``
const ItemTotal = styled.div`
    font-size: 20px;
    @media only screen and (max-width:600px){
        font-size: 18px;
    }
    @media only screen and (max-width:500px){
        font-size: 14px;
    }
`
const Right = styled.div`
    flex: 2;
    height: 40vh;
    margin: 30px 10px;
    background-color: white;
    padding: 10px 20px;
    @media only screen and (max-width:1000px){
        margin: 10px 5px;
    }
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
    @media only screen and (max-width:1000px){
        width: 30%;
    }
    @media only screen and (max-width:520px){
        width: 40%;
    }
    @media only screen and (max-width:400px){
        width: 50%;
    }
`
export default function Cart() {
    const [StripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        setStripeToken(token)
    }
    useEffect(() => {
        const MakeRequest = async ()=>{
            let url = "http://localhost:5000/api/checkout/payment"
            let Data = {
                tokenId:StripeToken.id,
                amount: 5000
            }
            let res = await fetch(url,{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Data)
            })
            let data = await res.json()
            console.log(data)
            window.location.replace('http://localhost:3000/success');
        }
        StripeToken && MakeRequest()
    }, [StripeToken])
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
                            <ItemTitle>AMC MotherBoard</ItemTitle>
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
                            <ItemTitle>550W Power Supply</ItemTitle>
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
                    {StripeToken ? (<span>Processing. Please Wait...</span>):(
                    <StripeCheckout name="LAMA." billingAddress shippingAddress description="Your Total is $50" amount={5000} stripeKey="pk_test_51K2VUGLHdmbQBmKfNSRYQLUjL8MHGhL0n0vF12Fs7RYmT7fbYnsnikWUrqjuNr6ki7gwrCDMKSN12gRKFkXyTQOv00HqPigLRG" token={onToken}>
                        <Button>Checkout Now </Button>
                    </StripeCheckout>
                    )}
                </Right>
            </Items>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
