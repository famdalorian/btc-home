
import HeroSection from '../components/HeroSection'
import "../App.css";
import Testimonials from '../components/Testimonials';
// import NewsFeedSection from '../components/NewsFeedSection'

export default function home() {
  return ( 
    <>
      <div className="container">
        <HeroSection/>
<div className="reviews">
  <Testimonials/>
</div>
      </div>
      
    </>
  );
}
