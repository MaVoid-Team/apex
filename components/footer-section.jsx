"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Dumbbell, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-slate-900 text-slate-300 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <span>APEX Fitness</span>
            </Link>
            <p className="text-sm">
              Elite fitness experiences for those who demand excellence. Transform your body, elevate your performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-orange-500 transition-colors">
                  Our Facilities
                </Link>
              </li>
              <li>
                <Link href="#preview" className="hover:text-orange-500 transition-colors">
                  Virtual Tour
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-orange-500 transition-colors">
                  Membership Plans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-sm">
              <strong className="text-white">Elite Hotline:</strong>
              <br />
              +1 (555) 123-APEX
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} APEX Fitness. All rights reserved.</p>
          <p className="mt-1">Where Champions Are Made.</p>
        </div>
      </div>
    </motion.footer>
  )
}
