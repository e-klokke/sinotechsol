"use client";

import { contact } from "@/content/copy";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 bg-navy-900/20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-text-primary mb-12 text-center"
        >
          {contact.sectionTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <a
            href="mailto:info@sinotechsol.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-accent hover:text-accent-hover hover:scale-105 transition-all duration-300"
          >
            info@sinotechsol.com
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {contact.addresses.lisbon.city}, {contact.addresses.lisbon.country}
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {contact.addresses.tampa.city}, {contact.addresses.tampa.state}
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
