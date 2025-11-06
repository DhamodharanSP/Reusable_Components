import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatedBlobs } from "@/components/animated-blobs"
import { AuthForm } from "@/components/auth-form"
import { LeftPanel } from "@/components/left-panel"
import { RightPanel } from "@/components/right-panel"
import { ThemeToggle } from "@/components/theme-toggle"
import { ThemeProvider } from "@/components/theme-provider"

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  const carouselImages = [
    "/frame1.webp",
    "/frame2.jpg",
    "/frame3.webp",
    "frame4.avif",
  ]

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >

      <AnimatedBlobs />
      <ThemeToggle />

      <motion.div
        className="relative z-10 w-full max-w-6xl bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row">
          {!isSignUp && <LeftPanel isSignUp={isSignUp} carouselImages={carouselImages} />}

          <motion.div
            className={`w-full flex items-center justify-center ${isSignUp ? "lg:w-1/2" : "lg:w-1/2"} p-8 lg:p-12`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <AuthForm isSignUp={isSignUp} onToggle={() => setIsSignUp(!isSignUp)} />
          </motion.div>

          {isSignUp && <RightPanel isSignUp={isSignUp} carouselImages={carouselImages} />}
        </div>
      </motion.div>

      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-primary/30 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-2 h-2 bg-accent/30 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthPage />
    </ThemeProvider>
  )
}
