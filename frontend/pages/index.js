import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductCard from '../components/card'
import ColorfulCarousel from '../components/carousel'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import SearchBar from '../components/searchbar'
export default function Home() {
  return (
    <div className={styles.container}>
    <SearchBar/>
    <Header/>
    <ColorfulCarousel/>
    <ProductCard/>
      <Footer/>
    </div>
  )
}
  

