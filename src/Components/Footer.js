import React from 'react'
import styled from 'styled-components'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Container = styled.div`
    width: 100%;
    min-height: 30vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    height: 270px;
    width: 370px;
`
const LeftOne = styled.div`
    font-size: 40px;
    font-weight: bolder;
    margin: 10px 20px;
    margin-top: 35px;
`
const LeftTwo = styled.div`
    font-size: 14px;
    margin:10px 20px;
`
const LeftThree = styled.div`
    display: flex;
    margin: 10px 20px;
`
const LeftThreeItem = styled.div`
    margin-right: 10px;
    cursor: pointer;
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 370px;
`
const CenterOne = styled.div`
    font-size: 25px;
    margin: 15px 40px;
    margin-top: 30px;
    letter-spacing: 1.5px;
    font-weight: bold;

    @media only screen and (max-width:740px){
        margin: 15px 20px;
    }
`
const CenterTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const CenterList= styled.ul`
    list-style:none;
    flex: 1;
`
const CenterListItem = styled.li`
    text-decoration: none;
    margin: 10px 0px;
    letter-spacing: 1px;
    cursor: pointer;
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 370px;
`
const RightOne = styled.div`
    font-size: 25px;
    margin: 15px 20px;
    margin-top: 30px;
    letter-spacing: 1.5px;
    font-weight: bold;
`
const RightTwo = styled.div``
const RightTwoOne = styled.div`
    display: flex;
    align-items: center;
    margin:15px 20px ;
    letter-spacing: 1.5px;
`
export default function Footer() {
    return (
        <Container>
            <Left>
                <LeftOne>LAMA.</LeftOne>
                <LeftTwo> There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.</LeftTwo>
                <LeftThree>
                    <LeftThreeItem>
                        <FacebookIcon color="primary" style={{ fontSize: 35 }}/>
                    </LeftThreeItem>
                    <LeftThreeItem>
                        <InstagramIcon style={{ fontSize: 35,color:"red" }}/>
                    </LeftThreeItem>
                    <LeftThreeItem>
                        <TwitterIcon color="info" style={{ fontSize: 35 }}/>
                    </LeftThreeItem>
                    <LeftThreeItem>
                        <GitHubIcon style={{ fontSize: 35}}/>
                    </LeftThreeItem>
                </LeftThree>
            </Left>
            <Center>
                <CenterOne>Useful Links</CenterOne>
                <CenterTwo>
                    <CenterList>
                        <CenterListItem>Home</CenterListItem>
                        <CenterListItem>Man Fashion</CenterListItem>
                        <CenterListItem>Accessories</CenterListItem>
                        <CenterListItem>Order Listing</CenterListItem>
                        <CenterListItem>Wisting</CenterListItem>
                    </CenterList>
                    <CenterList>
                        <CenterListItem>Cart</CenterListItem>
                        <CenterListItem>Woman Fashion</CenterListItem>
                        <CenterListItem>My Account</CenterListItem>
                        <CenterListItem>Wishlist</CenterListItem>
                        <CenterListItem>Terms</CenterListItem>
                    </CenterList>
                </CenterTwo>
            </Center>
            <Right>
                <RightOne>Contact</RightOne>
                <RightTwo>
                    <RightTwoOne>
                        <LocationOnIcon style={{marginRight:"10px"}}/> 1243A 1B Landcraft Golflinks
                    </RightTwoOne>
                    <RightTwoOne>
                        <LocalPhoneIcon style={{marginRight:"10px"}}/> +91 9315566594
                    </RightTwoOne>
                    <RightTwoOne>
                        <MailOutlineIcon style={{marginRight:"10px"}}/> suryansh.sharma9315@gmail.com
                    </RightTwoOne>
                </RightTwo>
            </Right>
        </Container>
    )
}
