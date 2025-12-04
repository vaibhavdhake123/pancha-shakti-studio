import TopBar from "../components/TopBar";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      {/* <SocialBar /> */}
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
