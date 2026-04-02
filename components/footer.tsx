"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 px-4 border-t border-border"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Steepan. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
