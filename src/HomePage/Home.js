import React from 'react'
import Header from '../navbar/Header'
import SearchBar from '../Search/SearchBar'
import HeaderTwo from '../navbar/HeaderTwo'
import FashionCard from '../Card/FashionCard'
import InfoCard from '../Card/InfoCard'
import ProductCategories from '../Categories/ProductCategories'
import FeaturedCategories from '../Categories/FeaturedCategories'
import SpecialOfferCard from '../Card/SpecialOfferCard'
import RecentProduct from '../Categories/RecentProduct'
import Vendor from '../sponcers/vendor'
import FooterCard from '../footer/FooterCard'
import Shoplist from '../Shop/shoplist'


const Home = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <HeaderTwo/>
      <FashionCard/>
      <InfoCard/>
      <ProductCategories/>
      <FeaturedCategories/>
      <SpecialOfferCard/>
      <RecentProduct/>
      <Vendor/>
      <FooterCard/>

    </div>
  )
}

export default Home