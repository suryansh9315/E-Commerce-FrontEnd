import React from 'react'
import styled from 'styled-components'
import Adds from '../Components/Adds'
import Navbar from '../Components/Navbar'
import Popular from '../Components/Popular'
import Footer from '../Components/Footer'
import NewsLetter from '../Components/NewsLetter'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px 20px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px;
    @media only screen and (max-width:600px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`
const FilterItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:600px){
        margin: 5px 0px;
    }
`
const Title2 = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    @media only screen and (max-width:800px){
        font-size: 15px;
    }
`
const Select = styled.select`
    background-color: white;
    padding: 5px 10px;
    border: none;
    font-size: 16px;
    border: 1px solid black;
    margin-right: 10px;
    @media only screen and (max-width:800px){
        font-size: 14px;
    }
`
const Option = styled.option`
    background-color: white;
    color: black;
    border: none;
    outline: none;
`

export default function ProductList() {
    return (
        <Container>
            <Navbar/>
            <Adds/>
            <Title>Winter</Title>
            <Filter>
                <FilterItem>
                    <Title2>Filter Products:</Title2>
                    <FilterItem>
                        <Select>
                            <Option selected>Color</Option>
                            <Option>Red</Option>
                            <Option>White</Option>
                            <Option>Black</Option>
                            <Option>Blue</Option>
                            <Option>Pink</Option>
                        </Select>
                    </FilterItem>
                    <FilterItem>
                        <Select>
                            <Option selected>Size</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>XXL</Option>
                        </Select>
                    </FilterItem>
                </FilterItem>
                <FilterItem>
                    <Title2>Sort Products:</Title2>
                    <Select>
                            <Option selected>Latest</Option>
                            <Option>Price(asc)</Option>
                            <Option>Price(dsc)</Option>
                            <Option>Oldest</Option>
                    </Select>
                </FilterItem>
            </Filter>
            <Popular/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
