"use client";

import { capabilities } from "@/content/copy";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="py-24 px-6 bg-navy-900/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-text-primary mb-12 text-center"
        >
          {capabilities.sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-light rounded-xl p-8 border-accent/20 hover:border-accent/40 hover:glow-sm transition-all duration-300 group"
            >
              <h3 className="font-display text-xl font-semibold text-text-primary mb-4 group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
