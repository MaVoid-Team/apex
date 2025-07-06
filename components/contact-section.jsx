"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-APEX",
    subtitle: "Mon-Fri 6AM-10PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@apexfitness.com",
    subtitle: "24/7 Support",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Elite Street",
    subtitle: "Downtown District",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "24/7 Access",
    subtitle: "Premium Members",
  },
]

export default function ContactSection() {
  return (
    <motion.section id="contact" className="py-16 md:py-24 bg-white" {...fadeInAnimation}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Start Your Transformation</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to join the elite? Contact us today for a personalized consultation and facility tour.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div {...fadeInAnimation} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">Get Started Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <Input placeholder="John" className="border-slate-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" className="border-slate-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" className="border-slate-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="border-slate-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Fitness Goals</label>
                  <Textarea
                    placeholder="Tell us about your fitness goals and what you'd like to achieve..."
                    className="border-slate-300 min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInAnimation} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">{info.title}</h3>
                    <p className="text-slate-700 font-medium">{info.details}</p>
                    <p className="text-slate-500 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-slate-900 text-white rounded-lg">
              <h3 className="text-xl font-bold mb-4">Premium Membership Benefits</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• 24/7 facility access</li>
                <li>• Personal training sessions</li>
                <li>• Nutrition counseling</li>
                <li>• Recovery suite access</li>
                <li>• Guest privileges</li>
                <li>• Premium locker rooms</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
