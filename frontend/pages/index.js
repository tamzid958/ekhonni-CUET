import Footer from '../components/footer'
import Header from '../components/header'
import CarouselSection from '../components/carousel/carouselSection'
import CardSection from '../components/card/cardSection'

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
  

