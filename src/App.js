import React from 'react'
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Foods from './Components/Foods';
import Category from './Components/Category';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Cards />
        <Foods />
        <Category />
        <Footer />
    </div>
  )
}

export default App;