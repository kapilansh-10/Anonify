import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100">
        <Hero/>
        <Features/>
        <HowItWorks/>
      </main>
      <Footer/>
    </>
  );
}
