import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Popular from '../Components/Popular'
import NewsLetter from '../Components/NewsLetter'
import Adds from '../Components/Adds'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <div>
            <Adds/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Popular/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}
