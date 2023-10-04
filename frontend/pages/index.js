import CardSection from '../components/card/cardSection'
import Footer from '../components/footer'
import Header from '../components/header'
import CarouselSection from '../components/carousel/carouselSection'
import axios from 'axios'
import React from 'react'
import { baseUrl } from '../utils/baseUrl'
import { useState,useEffect } from 'react'
import dynamic from "next/dynamic";

function Home({ products }) {

  const [shownProducts, setshownProducts] = useState([])

  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  console.log(user);
  
  useEffect(() => {
    if (user && user.userType === 'SELLER') {
      axios
        .get(`${baseUrl}/products/search/findBySellerId?id=${user.id}`)
        .then((response) => {
          const userProducts = response.data._embedded.products;
          const filteredProducts = products.filter((p) =>
            userProducts.find((userProduct) =>
              userProduct._links.product.href === p._links.product.href
            )
          );
          setshownProducts(filteredProducts);
        })
        .catch((error) => {
          console.error('Error fetching user products:', error);
        });
    } else {
      setshownProducts(products);
    }
  }, []); 
      
      


  return (
    <div className="container">

      <Header />
      <CarouselSection />

      <div className="container">
        {
          shownProducts.length > 0 &&(
            <div>
              <h3 className="text-center"> Products</h3>
              <CardSection data={shownProducts} />
            </div>
          )
        }
      </div>
      <Footer />

    </div>
  )
}
export default dynamic (() => Promise.resolve(Home), {ssr: false})


export async function getStaticProps() {

  try {
    const response = await axios.get(`${baseUrl}/products`);
    const products = response.data._embedded.products;
    return {
      props: {
        products,
      },
    };

  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}
