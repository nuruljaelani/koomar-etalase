"use client";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
};
import Image from "next/image";


export default function Template({ isVisible, children }) {
  return (
    <div>
      <div className="container max-w-2xl p-1 lg:px-0">{children}</div>
    </div>
  );
}
