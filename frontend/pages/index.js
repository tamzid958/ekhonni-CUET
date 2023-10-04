import CardSection from '../components/card/cardSection'
import Footer from '../components/footer'
import Header from '../components/header'
import CarouselSection from '../components/carousel/carouselSection'
import axios from 'axios'
import React from 'react'
import { baseUrl } from '../utils/baseUrl'
import { useState } from 'react'

export default function Home({ products }) {

  const [sellerProducts, setSellerProducts] = useState([])

  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
  if (user && user.userType === 'SELLER') {
    axios.get(`${baseUrl}/products/search/findBySellerId?id=${user.id}`)
      .then((response) => {
        const userProducts = response.data._embedded.products;
        if (user && user.userType === 'SELLER') {
          axios.get(`${baseUrl}/products/search/findBySellerId?id=${user.id}`)
            .then((response) => {
              const userProducts = response.data._embedded.products;
              const filteredProducts = products.filter((product) =>
                userProducts.find((userProduct) =>
                  userProduct._links.product.href === product._links.product.href
                )
              );
              setSellerProducts(filteredProducts);

            })
            .catch((error) => {
              console.error('Error fetching user products:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error fetching user products:', error);
      });
  }

  return (
    <div className="container">

      <Header />
      <CarouselSection />

      <div className="container">
        {
          sellerProducts.length > 0 ? (
            <div>
              <h3 className="text-center">Your Products</h3>
              <CardSection data={sellerProducts} />
            </div>
          ) : (
            <><h3 className="text-center">All Products</h3><CardSection data={products} /></>
          )


        }
      </div>
      <Footer />

    </div>
  )
}


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
