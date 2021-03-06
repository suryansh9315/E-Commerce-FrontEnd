import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavbarContainer = styled.div`
    height:70px;
    display: flex;
    align-items: center;
    @media only screen and (max-width:500px){
        height:60px;
    }
`
const Wrapper = styled.div`
    margin: 10px 20px;
    display: flex;
    align-items: center;
    width: 100%;
`
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center;

    @media only screen and (max-width:700px){
        display: none;
    }
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
`
const Input = styled.input`
    outline: none;
    margin-right: 5px;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    @media only screen and (max-width:700px){
        text-align: left;
    }
`
const LOGO = styled.h1`
    font-weight: bolder;
    @media only screen and (max-width:500px){
        display: none;
    }
`
const LOGO2 = styled.h2`
    font-weight: bolder;
    display: none;
    @media only screen and (max-width:500px){
        display: block;
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuItem = styled.div`
    font-size: 17px;
    cursor: pointer;
    margin: 0px 8px;
`
export default function Navbar() {
    return (
        <NavbarContainer>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <Input />
                    <SearchIcon></SearchIcon>
                </Left>
                <Center>
                    <LOGO>LAMA.</LOGO>
                    <LOGO2>LAMA.</LOGO2>
                </Center>
                <Right>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </NavbarContainer>
    )
}
