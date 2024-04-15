import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Products from "./Components/Products/Products"
import Categories from './Components/Categories/Categories'
import Features from './Components/Features/Features'
import Quotes from './Components/Quotes/Quotes'
import Footer from './Components/Footer/Footer'


export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <Features/>
      <Categories />
      <Quotes/>
      <Footer/>
    </>
  )
}
