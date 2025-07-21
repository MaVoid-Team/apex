"use client"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell, ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSectionVariant2() {
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.4, 0.8, 0.4],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-foreground via-card to-foreground text-white overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,69,0,0.15) 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,69,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,69,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Energy Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-primary rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Background Waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(255,69,0,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(0,191,255,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(255,69,0,0.05) 0%, transparent 50%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(ellipse at 20% 50%, rgba(255,69,0,0.1) 0%, transparent 50%),
             radial-gradient(ellipse at 80% 20%, rgba(0,191,255,0.1) 0%, transparent 50%),
             radial-gradient(ellipse at 40% 80%, rgba(255,69,0,0.05) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 80% 30%, rgba(255,69,0,0.1) 0%, transparent 50%),
             radial-gradient(ellipse at 20% 70%, rgba(0,191,255,0.1) 0%, transparent 50%),
             radial-gradient(ellipse at 60% 20%, rgba(255,69,0,0.05) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 20% 50%, rgba(255,69,0,0.1) 0%, transparent 50%),
             radial-gradient(ellipse at 80% 20%, rgba(0,191,255,0.1) 0%, transparent 50%),
             radial-gradient(ellipse at 40% 80%, rgba(255,69,0,0.05) 0%, transparent 50%)`,
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/" className="flex items-center space-x-3 text-2xl font-bold">
              <motion.div whileHover={{ scale: 1.2, rotate: 180 }} transition={{ type: "spring", stiffness: 300 }}>
                <Dumbbell className="h-8 w-8 text-primary" />
              </motion.div>
              <span>APEX Fitness</span>
            </Link>
          </motion.div>

          <motion.div
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {["About", "Facilities", "Membership", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ y: -2, color: "#FF4500" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={`#${item.toLowerCase()}`} className="font-medium">
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Join Now</Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <div className="mb-4">
              {"Reach Your".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
            <div className="relative">
              <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-primary blur-2xl"
              />
              <motion.span
                className="text-primary relative z-10"
                initial={{ scale: 0, rotateY: -180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                APEX
              </motion.span>
            </div>
          </div>

          <motion.p
            className="text-xl sm:text-2xl text-primary mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Premium fitness experience with state-of-the-art equipment, expert trainers, and luxury amenities designed
            for peak performance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255,69,0,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                />
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Tour
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="relative"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{
                opacity: [1, 0.3, 1],
                height: [12, 6, 12],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <motion.div
            className="absolute inset-0 border-2 border-primary rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
