"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from 'lucide-react'

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const membershipPlans = [
  {
    name: "Essential",
    price: "$49",
    period: "/month",
    description: "Perfect for getting started on your fitness journey",
    icon: Zap,
    popular: false,
    features: [
      "Access to all gym equipment",
      "Locker room facilities",
      "Basic fitness assessment",
      "Mobile app access",
      "Guest pass (2 per month)",
    ],
    buttonText: "Start Essential",
  },
  {
    name: "Elite",
    price: "$89",
    period: "/month",
    description: "Our most popular plan for serious fitness enthusiasts",
    icon: Star,
    popular: true,
    features: [
      "Everything in Essential",
      "Unlimited group classes",
      "Personal training session (1 per month)",
      "Nutrition consultation",
      "Priority booking",
      "Guest pass (5 per month)",
      "Recovery suite access",
    ],
    buttonText: "Go Elite",
  },
  {
    name: "Apex",
    price: "$149",
    period: "/month",
    description: "Ultimate luxury experience for peak performance",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Elite",
      "Unlimited personal training",
      "Custom meal planning",
      "24/7 facility access",
      "Unlimited guest passes",
      "Spa services included",
      "Private training areas",
      "Concierge services",
    ],
    buttonText: "Reach Apex",
  },
]

export default function MembershipSection() {
  return (
    <motion.section id="membership" className="py-16 md:py-24 bg-background" {...fadeInAnimation}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div {...fadeInAnimation}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose Your Path to Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the membership that fits your lifestyle and fitness goals. All plans include our satisfaction guarantee.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              {...fadeInAnimation}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? 'border-primary border-2 shadow-xl' : 'hover:border-primary/50'
              }`}>
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-semibold py-3 ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          {...fadeInAnimation}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">
            All memberships include a 7-day free trial and no long-term contracts
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              Money-back guarantee
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              Freeze membership option
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
