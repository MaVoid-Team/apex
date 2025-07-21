"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Eye } from "lucide-react"

const facilities = [
  {
    id: 1,
    title: "Downtown Flagship",
    location: "Financial District",
    imageUrl: "/gym.jpg",
    description:
      "Our premier location featuring Olympic lifting platforms, premium cardio equipment, and executive locker rooms.",
  },
  {
    id: 2,
    title: "Westside Performance Center",
    location: "Beverly Hills",
    imageUrl: "/gym.jpg",
    description:
      "Complete wellness destination with aquatic center, spa services, and specialized athletic performance training.",
  },
  {
    id: 3,
    title: "Northpoint Elite",
    location: "Uptown District",
    imageUrl: "/gym.jpg",
    description:
      "Boutique-style facility specializing in group fitness, yoga studios, and personalized training programs.",
  },
]

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function FacilitiesSection() {
  return (
    <motion.section id="facilities" className="py-16 md:py-24 bg-secondary" {...fadeInAnimation}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Premium Locations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience world-class fitness facilities designed for the discerning athlete and wellness enthusiast.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div key={facility.id} {...fadeInAnimation} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={facility.imageUrl || "/placeholder.svg"}
                      alt={facility.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">{facility.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">{facility.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{facility.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-foreground hover:bg-foreground/90 text-background">
                    <Eye className="h-4 w-4 mr-2" />
                    Virtual Tour
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
