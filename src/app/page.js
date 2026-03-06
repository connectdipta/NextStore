"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductsPreview from "@/components/ProductsPreview";
import Testimonials from "@/components/Testimonials";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#FEFAE0] via-[#FEFAE0] to-[#f3ecd0]">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-10">

        <section data-aos="fade-up">
          <Hero />
        </section>

        <section data-aos="fade-up" data-aos-delay="100">
          <Features />
        </section>

        <section data-aos="fade-up" data-aos-delay="200">
          <ProductsPreview />
        </section>

        <section data-aos="fade-up" data-aos-delay="300">
          <Testimonials />
        </section>

        <section data-aos="zoom-in">
          <Banner />
        </section>

      </main>

    </div>
  );
}