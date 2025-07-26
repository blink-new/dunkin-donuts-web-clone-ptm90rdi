import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Star, Heart } from "lucide-react"

const flavors = [
  {
    id: 1,
    name: "Rose Petal Bliss",
    description: "Delicate rose-infused vanilla with crystallized rose petals",
    image: "🌹",
    price: "$6.50",
    rating: 4.9,
    isPopular: true,
    color: "from-pink-400 to-rose-500"
  },
  {
    id: 2,
    name: "Lavender Dreams",
    description: "Creamy lavender ice cream with honey swirls",
    image: "💜",
    price: "$6.00",
    rating: 4.8,
    isPopular: false,
    color: "from-purple-400 to-indigo-500"
  },
  {
    id: 3,
    name: "Sunflower Vanilla",
    description: "Rich vanilla bean with sunflower seed brittle",
    image: "🌻",
    price: "$5.50",
    rating: 4.7,
    isPopular: true,
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 4,
    name: "Cherry Blossom",
    description: "Light cherry flavor with white chocolate chunks",
    image: "🌸",
    price: "$6.25",
    rating: 4.9,
    isPopular: false,
    color: "from-pink-300 to-pink-500"
  },
  {
    id: 5,
    name: "Jasmine Green Tea",
    description: "Refreshing green tea with jasmine flower essence",
    image: "🍃",
    price: "$5.75",
    rating: 4.6,
    isPopular: false,
    color: "from-green-400 to-teal-500"
  },
  {
    id: 6,
    name: "Hibiscus Berry",
    description: "Tart hibiscus with mixed berry compote",
    image: "🌺",
    price: "$6.00",
    rating: 4.8,
    isPopular: true,
    color: "from-red-400 to-pink-500"
  }
]

export function FeaturedFlavors() {
  return (
    <section id="flavors" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our Signature
            <span className="block bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Floral Flavors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each flavor is carefully crafted to capture the essence of beautiful flowers, 
            creating a unique and delightful ice cream experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor) => (
            <Card 
              key={flavor.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <div className={`h-32 bg-gradient-to-br ${flavor.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4">
                  {flavor.isPopular && (
                    <Badge className="bg-white/90 text-gray-800 font-semibold">
                      Popular
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl filter drop-shadow-lg">{flavor.image}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                    {flavor.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-600">{flavor.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {flavor.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">{flavor.price}</span>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}