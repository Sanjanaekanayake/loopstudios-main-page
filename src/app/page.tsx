import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Hero />
      <Body />
      <Footer />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
     
    </main>
  );
}
