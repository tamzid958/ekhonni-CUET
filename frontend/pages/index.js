import Head from 'next/head'
import '../styles/Home.module.css'
import ProductCard from '../components/card/productCard'
import ColorfulCarousel from '../components/carousel/carousel'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import SearchBar from '../components/searchbar'

import CategoryList from '../components/categorylist'
import CarouselSection from '../components/carousel/carouselSection'
import CardSection from '../components/Card/cardSection'

export default function Home() {
  
  return (
    <div className="container">
     
    <Header/>
    <CarouselSection/>
    <CardSection />
    <CardSection/>
    <CardSection/>
    <Footer/>

    </div>
  )
}
  

