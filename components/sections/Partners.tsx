"use client";

import { partners } from "@/content/copy";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.logos.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-text-tertiary text-xl font-display font-bold opacity-60 hover:opacity-100 hover:text-text-primary hover:scale-110 transition-all duration-300 cursor-default"
              style={{ filter: "grayscale(100%)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)";
              }}
            >
              {/* TODO(eric): Replace with actual partner logos */}
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
