import Banner from "@components/section/home/banner";
import HeroSection from "@components/section/home/hero";
import Features from "@components/section/home/features";
import Product from "@components/section/home/product";
import Plans from "@components/section/home/plans";
import Benefits from "@components/section/home/benefits";
import TransformBanner from "@components/section/home/transform-banner";
import Contact from "@components/section/home/contact";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Banner />
      <Features />
      <Product />
      <Plans />
      <Benefits />
      <TransformBanner />
      <Contact />
    </div>
  );
}

export default HomePage;
