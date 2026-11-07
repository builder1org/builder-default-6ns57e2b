import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="site-main">
          <Hero />
          <ProductGrid />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
