import styled from 'styled-components'
import React from 'react'
import { popularProducts } from '../Data'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
    width: 100%;
    min-height: 60vh;
    padding-bottom: 50px;
`
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
const Circle = styled.div`
    opacity: 0;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    margin: 10px 10px;
    transition: all 0.2s ease;

    &:hover{
        transform: scale(120%);
    }
`
const Element = styled.div`
    height: 320px;
    width: 270px;
    background: url(${props => props.ImageURL});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 15px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 2s ease;

    &:hover{
        background: linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),url(${props => props.ImageURL});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    &:hover ${Circle}{
        opacity: 1;
    }
`
export default function Categories() {
    return (
        <Container>
            <Wrapper>
                {popularProducts.map(item => {
                    return (
                        <Element ImageURL={item.img}>
                            <Circle>
                                <ShoppingCartOutlinedIcon />
                            </Circle>
                            <Circle>
                                <SearchOutlinedIcon/>
                            </Circle>
                            <Circle>
                                <FavoriteBorderOutlinedIcon/>
                            </Circle>
                        </Element>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

