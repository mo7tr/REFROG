import { About } from "./_components/About";
import { CarouselComponent } from "./_components/CarouselComponent";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Tokenomics } from "./_components/Tokenomics";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-r from-custom-green">
      <Header />
      <div className="flex flex-col px-2">
        <About />
        <CarouselComponent />
        <Tokenomics />
      </div>
      <Footer />
    </main>
  );
}
