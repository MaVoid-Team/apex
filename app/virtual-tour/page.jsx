"use client"

import { useState, useEffect, Suspense, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ChevronLeft, ChevronRight, Grid, X, Play, Pause, Home, Loader2 } from "lucide-react"
import Link from "next/link"

const gymAreas = [
  {
    src: "/gym-360.jpg",
    thumb: "/gym-360.jpg",
    caption: "Strength Training Zone",
  },
  {
    src: "/gym-360.jpg",
    thumb: "/gym-360.jpg",
    caption: "Cardio & Conditioning",
  },
  {
    src: "/gym-360.jpg",
    thumb: "/gym-360.jpg",
    caption: "Group Fitness Studio",
  },
  {
    src: "/gym-360.jpg",
    thumb: "/gym-360.jpg",
    caption: "Aquatic & Recovery Center",
  },
]

function VirtualTourContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [viewerInstance, setViewerInstance] = useState(null)
  const [isLoadingImage, setIsLoadingImage] = useState(true)
  const [showThumbnails, setShowThumbnails] = useState(true)
  const [isAutorotate, setIsAutorotate] = useState(false)
  const [currentZoom, setCurrentZoom] = useState(50)
  const isTransitioning = useRef(false)

  useEffect(() => {
    setIsClient(true)
    const initialIndex = Number.parseInt(searchParams.get("area") || "0", 10)
    if (initialIndex >= 0 && initialIndex < gymAreas.length) {
      setCurrentIndex(initialIndex)
    }
  }, [searchParams])

  const navigateToArea = (index) => {
    if (index === currentIndex || isLoadingImage || isTransitioning.current) return

    isTransitioning.current = true
    setIsLoadingImage(true)
    setCurrentIndex(index)

    const newUrl = `/virtual-tour?area=${index}`
    window.history.pushState({}, "", newUrl)
  }

  const nextArea = () => {
    const nextIndex = (currentIndex + 1) % gymAreas.length
    navigateToArea(nextIndex)
  }

  const prevArea = () => {
    const prevIndex = (currentIndex - 1 + gymAreas.length) % gymAreas.length
    navigateToArea(prevIndex)
  }

  const onViewerReady = (instance) => {
    setViewerInstance(instance)
    setIsLoadingImage(false)
    isTransitioning.current = false

    if (isAutorotate) {
      try {
        instance.startAutorotate()
      } catch (error) {
        console.warn("Error starting autorotate:", error)
      }
    }
  }

  const onViewerError = (error) => {
    console.error("Viewer error:", error)
    setIsLoadingImage(false)
    isTransitioning.current = false
  }

  const handleZoomChange = (zoomLevel) => {
    setCurrentZoom(zoomLevel)
  }

  useEffect(() => {
    if (!viewerInstance || isLoadingImage) return

    try {
      if (isAutorotate) {
        viewerInstance.startAutorotate()
      } else {
        viewerInstance.stopAutorotate()
      }
    } catch (error) {
      console.warn("Error toggling autorotate:", error)
    }
  }, [isAutorotate, viewerInstance, isLoadingImage])

  if (!isClient) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-900 text-white">
        <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        <p className="ml-4 text-xl">Loading Virtual Tour...</p>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="h-screen w-screen relative flex flex-col bg-slate-900">
        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
          <Link href="/" passHref>
            <Button variant="outline" className="bg-white/80 hover:bg-white text-slate-900">
              <Home className="h-5 w-5 mr-2" /> Back to APEX
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAutorotate(!isAutorotate)}
                  className={`${isAutorotate ? "bg-orange-500 text-white" : "bg-white/80 text-slate-900"}`}
                  disabled={isLoadingImage}
                >
                  {isAutorotate ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isAutorotate ? "Stop" : "Start"} Auto-rotation</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowThumbnails(!showThumbnails)}
                  className="bg-white/80 hover:bg-white text-slate-900"
                >
                  {showThumbnails ? <X className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{showThumbnails ? "Hide" : "Show"} Area Selection</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Main Viewer */}
        <div className="flex-1 relative">
          {isLoadingImage && (
            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-10">
              <div className="text-center">
                <Loader2 className="h-12 w-12 animate-spin text-orange-500 mx-auto mb-4" />
                <p className="text-white text-lg">Loading {gymAreas[currentIndex].caption}...</p>
              </div>
            </div>
          )}

          <ReactPhotoSphereViewer
            key={currentIndex}
            src={gymAreas[currentIndex].src}
            height="100%"
            width="100%"
            container=""
            onReady={onViewerReady}
            onError={onViewerError}
            onZoomUpdated={handleZoomChange}
            navbar={["zoom", "caption", "fullscreen"]}
            caption={gymAreas[currentIndex].caption}
            defaultZoomLvl={50}
            autorotateDelay={3000}
            autorotateSpeed="1rpm"
          />
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                onClick={prevArea}
                disabled={isLoadingImage || isTransitioning.current}
                className="bg-white/80 hover:bg-white text-slate-900 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Previous Area</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                onClick={nextArea}
                disabled={isLoadingImage || isTransitioning.current}
                className="bg-white/80 hover:bg-white text-slate-900 shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Next Area</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Area Selection Thumbnails */}
        {showThumbnails && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-black/60 backdrop-blur-sm rounded-lg p-4">
            <div className="flex space-x-3 max-w-4xl">
              {gymAreas.map((area, index) => (
                <button
                  key={index}
                  onClick={() => navigateToArea(index)}
                  className={`relative group transition-all duration-300 rounded-lg overflow-hidden border-2 ${
                    index === currentIndex
                      ? "border-orange-500 scale-105 shadow-xl"
                      : "border-transparent hover:border-white hover:scale-105"
                  }`}
                  disabled={isLoadingImage || isTransitioning.current}
                >
                  <Image
                    src={area.thumb || "/placeholder.svg"}
                    alt={area.caption}
                    width={200}
                    height={120}
                    className="object-cover aspect-[16/10] group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1 text-center">
                    <span className="text-white text-xs truncate">{area.caption}</span>
                  </div>
                  {index === currentIndex && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded">Current</div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

export default function VirtualTourPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-slate-900 text-white">
          <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
          <p className="ml-4 text-xl">Loading Virtual Tour...</p>
        </div>
      }
    >
      <VirtualTourContent />
    </Suspense>
  )
}
