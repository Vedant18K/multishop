
import './App.css';
import FashionCard from './Card/FashionCard';
import InfoCard from './Card/InfoCard';
import SpecialOfferCard from './Card/SpecialOfferCard';
import FeaturedCategories from './Categories/FeaturedCategories';
import ProductCategories from './Categories/ProductCategories';
import RecentProduct from './Categories/RecentProduct';
import FooterCard from './footer/FooterCard';
import Header from './header/Header';
import HeaderTwo from './header/HeaderTwo';
import SearchBar from './searchbar/SearchBar';
import Vendor from './sponcers/vendor';

function App() {
  return (
    <div className="">
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
  );
}

export default App;
