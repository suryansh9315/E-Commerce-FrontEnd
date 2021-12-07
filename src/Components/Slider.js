import styled from 'styled-components'
import React,{ useState } from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../Data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    @media only screen and (max-width:750px){
        height: 70vh;
    }
    @media only screen and (max-width:600px){
        height: 50vh;
    }
`
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    transition: all 0.5s ease;
    display: flex;
    transform: translateX(${props=>props.currentpage*-100}vw);
    @media only screen and (max-width:750px){
        height: 70vh;
    }
    @media only screen and (max-width:600px){
        height: 50vh;
    }
`
const Slideritem = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    @media only screen and (max-width:750px){
        height: 70vh;
    }
    @media only screen and (max-width:600px){
        height: 50vh;
    }
`
const Left = styled.div`
    /* flex: 1; */
    height: 100vh;
    width: 50vw;
    background: url(${props=>props.ImageURL});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media only screen and (max-width:750px){
        height: 70vh;
    }
    @media only screen and (max-width:600px){
        height: 50vh;
    }
`
const Right = styled.div`
    /* flex: 1; */
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:750px){
        height: 70vh;
    }
    @media only screen and (max-width:600px){
        height: 50vh;
    }
`
const Title = styled.div`
    font-size: 3.5vw;
    font-weight: 1000;
    margin-bottom: 30px;
    @media only screen and (max-width:750px){
        font-size: 4vw;
        margin-bottom: 20px;
    }
`
const Desc = styled.div`
    font-size: 1.5vw;
    font-weight: bold;
    width: 75%;
    margin-bottom: 30px;
    word-spacing: 5px;
    letter-spacing: 1px;
    @media only screen and (max-width:750px){
        font-size: 2vw;
        margin-bottom: 20px;
    }
`
const Button = styled.button`
    outline: none;
    border-radius: 5px;
    background-color: white;
    padding: 10px 20px;
    font-size: 17px;
    transition: 0.5s all ease;

    &:hover{
        background-color: black;
        color:white;
    }
    @media only screen and (max-width:500px){
        padding: 7px 15px;
    }
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    position: absolute;
    top: 50%;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #e6e9f0;
    transition: all 0.1s ease;

    &:hover{
        transform: scale(120%);
    }
`


export default function Slider() {
    const [CurrentPage, setCurrentPage] = useState(0);
    const LeftClicked = ()=>{
        if(CurrentPage===0){
            setCurrentPage(2);
        }else{
            setCurrentPage(CurrentPage-1);
        }
    }
    const RightClicked = ()=>{
        if(CurrentPage===2){
            setCurrentPage(0);
        }else{
            setCurrentPage(CurrentPage+1);
        }
    }
    return (
        <Container>
            <Wrapper currentpage={CurrentPage}>
                {sliderItems.map(item => {
                    return (<Slideritem>
                        <Left ImageURL={item.img}></Left>
                        <Right>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Shop Now</Button>
                        </Right>
                    </Slideritem>)
                })}
            </Wrapper>
            <Arrow direction="left">
                <ArrowLeftIcon  fontSize="large" onClick={LeftClicked}/>
            </Arrow>
            <Arrow direction="right">
                <ArrowRightIcon fontSize="large" onClick={RightClicked} />
            </Arrow>
        </Container>
    )
}
