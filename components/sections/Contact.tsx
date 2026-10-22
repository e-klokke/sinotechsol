"use client";

import { contact } from "@/content/copy";
import { ContactForm } from "@/components/ContactForm";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Contact({ standalone = false }: { standalone?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className={
        standalone
          ? "px-6 pb-24 pt-32"
          : "bg-navy-900/20 px-6 py-24"
      }
    >
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-semibold text-text-primary"
        >
          {contact.sectionTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-16 max-w-2xl"
        >
          <ContactForm />
        </motion.div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 text-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              {contact.addresses.lisbon.city}, {contact.addresses.lisbon.country}
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              {contact.addresses.tampa.city}, {contact.addresses.tampa.state}
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
