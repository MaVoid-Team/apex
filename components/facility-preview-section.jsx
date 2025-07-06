"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function FacilityPreviewSection() {
  const previewImage = "/placeholder.svg?height=600&width=1200"

  return (
    <motion.section id="preview" className="py-16 md:py-24 bg-slate-900" {...fadeInAnimation}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience Our Flagship Facility</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Take a virtual tour of our premium training environment with state-of-the-art equipment and luxury
            amenities.
          </p>
        </div>

        <motion.div
          className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-orange-500 group"
          {...fadeInAnimation}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {typeof window !== "undefined" && (
            <ReactPhotoSphereViewer
              src={previewImage}
              height={"100%"}
              width={"100%"}
              littlePlanet={false}
              container=""
              navbar={[
                "zoom",
                "caption",
                {
                  id: "custom-link",
                  title: "View Full Virtual Tour",
                  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 50%; height: 50%; margin: auto;"><path d="M10 6V8H5V19H16V14H18V19C18 20.1 17.1 21 16 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H10ZM19 2H12V4H17V9H19V2ZM14 4.83L17.17 8H14V4.83Z"></path></svg>`,
                  className: "custom-link-button",
                  onClick: () => {
                    console.log("Custom button in viewer clicked. Use main button for navigation.")
                  },
                },
              ]}
              defaultZoomLvl={50}
              autorotateDelay={5000}
              autorotateSpeed="0.5rpm"
            />
          )}
          <div className="absolute bottom-4 right-4 z-10">
            <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              <Link href="/virtual-tour">
                <ExternalLink className="h-5 w-5 mr-2" />
                Launch Full Tour
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-slate-300">
            Explore our facility in 360°. Click "Launch Full Tour" for the complete immersive experience.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
