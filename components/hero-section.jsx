"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell, ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/3d-gym-equipment.jpg')] bg-cover bg-center opacity-20"></div>

      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 text-2xl font-bold">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span>APEX Fitness</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-orange-500 transition-colors font-medium">
              About
            </Link>
            <Link href="#facilities" className="hover:text-orange-500 transition-colors font-medium">
              Facilities
            </Link>
            <Link href="#preview" className="hover:text-orange-500 transition-colors font-medium">
              Virtual Tour
            </Link>
            <Link href="#contact" className="hover:text-orange-500 transition-colors font-medium">
              Contact
            </Link>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">Join Now</Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Reach Your
            <span className="text-orange-500 block">APEX</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium fitness experience with state-of-the-art equipment, expert trainers, and luxury amenities designed
            for peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Tour
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
