"use client"
import { AnimatePresence, motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
};
import Image from "next/image";
import TopNav from "./TopNav";

export default function Layout({ isVisible, children}) {
    return (
      <AnimatePresence mode="wait">
        <div className="container max-w-2xl p-3 lg:px-0">
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
          <motion.div
            className="slide-in fixed left-0 top-0 w-full h-screen bg-black origin-bottom z-30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="slide-out  fixed left-0 top-0 w-full h-screen bg-black origin-top z-30"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </AnimatePresence>
    );
}