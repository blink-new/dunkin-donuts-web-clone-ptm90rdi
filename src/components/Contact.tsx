import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Visit Our
            <span className="block bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Flower Shop
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience our floral ice cream paradise in person. We can't wait to serve you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Blossom Street<br />
                        Garden District, CA 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">(555) 123-FLOWER</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">hello@flowerscoops.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Mon - Thu: 10am - 9pm</p>
                        <p>Fri - Sat: 10am - 10pm</p>
                        <p>Sunday: 11am - 8pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <Card className="border-0 shadow-lg h-full">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full min-h-[500px] bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-pink-300/30 rounded-full flex items-center justify-center animate-float">
                    <span className="text-2xl">🌸</span>
                  </div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-orange-300/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                    <span className="text-xl">🌺</span>
                  </div>
                  <div className="absolute top-1/3 right-12 w-20 h-20 bg-purple-300/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                    <span className="text-3xl">🌻</span>
                  </div>
                  
                  {/* Center Content */}
                  <div className="text-center z-10">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Find Us Here</h3>
                    <p className="text-gray-600 mb-4">123 Blossom Street, Garden District</p>
                    <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}