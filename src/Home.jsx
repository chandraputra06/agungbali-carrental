// src/Home.jsx
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import AboutSection from "./components/AboutSection";
import FavoriteCars from "./components/FavoriteCars";
import CarListSection from "./components/CarListSection";
import AvailableCar from "./components/AvailableCar";
import ArticlesSection from "./components/ArticlesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <HomeBanner />
        <FavoriteCars />
        <AboutSection />
        <CarListSection />
        <AvailableCar />
        <ArticlesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
