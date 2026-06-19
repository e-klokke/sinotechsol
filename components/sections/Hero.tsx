"use client";

import { hero } from "@/content/copy";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight"
        >
          {hero.headline}
        </motion.h1>

        {hero.subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {hero.subheadline}
          </motion.p>
        )}

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          href="mailto:info@sinotechsol.com"
          className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-hover hover:scale-105 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
        >
          {hero.cta}
        </motion.a>
      </div>
    </section>
  );
}
