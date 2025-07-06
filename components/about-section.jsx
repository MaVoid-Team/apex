"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Clock, Target } from "lucide-react"

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const stats = [
  { icon: Users, number: "5000+", label: "Active Members" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Clock, number: "24/7", label: "Access Available" },
  { icon: Target, number: "98%", label: "Success Rate" },
]

export default function AboutSection() {
  return (
    <motion.section id="about" className="py-16 md:py-24 bg-white" {...fadeInAnimation}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About APEX Fitness</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Where elite performance meets luxury wellness. Transform your body, elevate your mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <motion.div {...fadeInAnimation} transition={{ duration: 0.6, delay: 0.2 }}>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="APEX Fitness Interior"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div {...fadeInAnimation} transition={{ duration: 0.6, delay: 0.4 }}>
            <p className="text-slate-700 mb-6 text-lg leading-relaxed">
              At APEX Fitness, we believe fitness is more than just exercise—it's a lifestyle transformation. Our
              premium facilities combine cutting-edge technology with personalized training to deliver results that
              exceed expectations.
            </p>
            <p className="text-slate-700 mb-8 text-lg leading-relaxed">
              From Olympic-grade equipment to recovery suites and nutrition counseling, every detail is designed to
              support your journey to peak performance. Join the elite community that chooses excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">Premium Equipment</div>
              <div className="bg-slate-900 text-white px-4 py-2 rounded-full font-semibold">Expert Trainers</div>
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">Luxury Amenities</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          {...fadeInAnimation}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
