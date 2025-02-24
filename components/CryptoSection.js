"use client";

import Trending from "./Trending";
import CTA from "./CTA";

export default function CryptoSection() {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/bg-2.jpg')" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Trending />
        <CTA />
      </div>
    </section>
  );
}
