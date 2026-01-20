import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import FavoriteCars from "./components/FavoriteCars";
import HomeAbout from "./components/HomeAbout";
import CarSlider from "./components/CarSlider";
import AvailableCar from "./components/AvailableCar";
import NewArticles from "./components/NewArticles";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="layout-default">
      <Header />
      <main>
        <HomeBanner />
        <FavoriteCars />
        <HomeAbout />
        <CarSlider />
        <AvailableCar />
        <NewArticles />
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
