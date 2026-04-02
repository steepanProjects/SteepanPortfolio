"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {"I'm a B.Tech student in Artificial Intelligence & Data Science (2023–2027) at Kalaignar Karunanidhi Institute of Technology."}
              </p>
              <p>
                I have experience as a Web Developer Intern at LearnLogicify Technologies, where I built and maintained web applications with a focus on UI/UX performance.
              </p>
              <p>
                I enjoy building full-stack applications, solving complex problems, and participating in competitive programming. When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through writing and speaking at conferences.
              </p>
              <p>
                I&apos;m always excited to work on projects that challenge me to grow and learn something new.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Pixel Art Style Illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-500/20 rounded-3xl" />
              <div className="relative flex items-center justify-center h-full">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full max-w-[300px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Pixel Art Cat/Character */}
                  <rect x="60" y="40" width="80" height="80" fill="#7c3aed" rx="8" />
                  <rect x="70" y="30" width="20" height="20" fill="#7c3aed" />
                  <rect x="110" y="30" width="20" height="20" fill="#7c3aed" />
                  <rect x="75" y="55" width="15" height="15" fill="#a855f7" />
                  <rect x="110" y="55" width="15" height="15" fill="#a855f7" />
                  <rect x="80" y="60" width="5" height="5" fill="#1a1a1a" />
                  <rect x="115" y="60" width="5" height="5" fill="#1a1a1a" />
                  <rect x="85" y="85" width="30" height="5" fill="#a855f7" />
                  <rect x="65" y="120" width="70" height="50" fill="#7c3aed" rx="4" />
                  <rect x="55" y="125" width="15" height="35" fill="#7c3aed" rx="2" />
                  <rect x="130" y="125" width="15" height="35" fill="#7c3aed" rx="2" />
                  {/* Decorative elements */}
                  <circle cx="155" cy="140" r="4" fill="#a855f7" />
                  <circle cx="165" cy="150" r="3" fill="#7c3aed" />
                  <path d="M160 165 L170 155 L175 170 Z" fill="#a855f7" />
                </svg>
              </div>
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-violet-500/20 to-purple-600/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
