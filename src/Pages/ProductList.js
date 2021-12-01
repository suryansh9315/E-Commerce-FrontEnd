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
`
const FilterItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title2 = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
`
const Select = styled.select`
    background-color: white;
    padding: 5px 10px;
    border: none;
    font-size: 16px;
    border: 1px solid black;
    margin-right: 10px;
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
