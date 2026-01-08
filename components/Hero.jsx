"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/animations/motion";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeUp}>
          Building modern websites & stores
        </motion.h1>
        <motion.p variants={fadeUp} style={{ maxWidth: 500 }}>
          WordPress, Shopify, Webflow, Squarespace & Custom Development
        </motion.p>
      </motion.div>
    </section>
  );
}
