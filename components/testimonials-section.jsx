"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "APEX Fitness transformed not just my body, but my entire mindset. The trainers are world-class and the facilities are absolutely incredible. I've never felt stronger or more confident.",
    achievement: "Lost 30 lbs in 4 months",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "As someone who works long hours, I needed a gym that could accommodate my schedule. The 24/7 access and personalized training programs have been game-changers for my fitness journey.",
    achievement: "Gained 15 lbs muscle mass",
  },
  {
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The luxury amenities and professional atmosphere at APEX make every workout feel like a premium experience. The nutrition counseling helped me finally achieve my goals.",
    achievement: "Completed first marathon",
  },
  {
    name: "David Thompson",
    role: "Former NFL Player",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Even as a professional athlete, APEX's equipment and training programs impressed me. The recovery suite is unmatched, and the trainers understand high-performance training.",
    achievement: "Improved performance by 25%",
  },
  {
    name: "Lisa Park",
    role: "Doctor",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "The holistic approach to fitness at APEX aligns perfectly with my medical background. They focus on overall wellness, not just exercise. The results speak for themselves.",
    achievement: "Reduced stress levels significantly",
  },
  {
    name: "James Wilson",
    role: "Retired Executive",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "At 55, I thought my best fitness days were behind me. APEX proved me wrong. The age-appropriate programs and supportive community have given me a new lease on life.",
    achievement: "Strongest I've been in 20 years",
  },
]

export default function TestimonialsSection() {
  return (
    <motion.section id="testimonials" className="py-16 md:py-24 bg-secondary" {...fadeInAnimation}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div {...fadeInAnimation}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our members who have transformed their lives at APEX Fitness. Their success is our motivation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} {...fadeInAnimation} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Achievement Badge */}
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-6 inline-block">
                    {testimonial.achievement}
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          {...fadeInAnimation}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground text-sm">Member Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5000+</div>
            <div className="text-muted-foreground text-sm">Success Stories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground text-sm">Years of Excellence</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground text-sm">Support Available</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
