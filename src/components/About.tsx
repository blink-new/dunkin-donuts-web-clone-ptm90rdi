import { Card, CardContent } from "./ui/card"
import { Flower, Award, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Flower,
    title: "Floral Inspiration",
    description: "Every flavor is inspired by real flowers, capturing their essence in delicious ice cream form."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest organic ingredients and traditional artisan techniques."
  },
  {
    icon: Users,
    title: "Community Favorite",
    description: "Loved by thousands of customers who appreciate our unique floral approach."
  },
  {
    icon: Sparkles,
    title: "Handcrafted Daily",
    description: "Each batch is made fresh daily in small quantities to ensure perfect quality."
  }
]

export function About() {
  return (
    <section id="about" className="py-20 gradient-pink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            About
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Flower Scoops
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for flowers and ice cream, Flower Scoops brings together 
            the beauty of nature with the joy of artisan desserts. Our unique approach 
            creates flavors that are as beautiful as they are delicious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2020 by pastry chef Emma Rodriguez, Flower Scoops began as a dream 
                to create ice cream that celebrates the beauty of flowers. After years of 
                experimenting with floral essences and natural ingredients, we've perfected 
                our unique recipes.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, we're proud to offer over 20 signature flavors, each one carefully 
                crafted to capture the delicate essence of flowers while delivering an 
                unforgettable taste experience.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">20+</div>
                  <div className="text-sm text-gray-600">Unique Flavors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌸</div>
                  <p className="text-gray-600 font-medium">Crafted with Love</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center animate-float">
                <span className="text-3xl">🍦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}