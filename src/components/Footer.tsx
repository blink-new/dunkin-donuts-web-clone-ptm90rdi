import { Heart, Instagram, Facebook, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600">
                <span className="text-xl font-bold text-white">🌸</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-pink-400">Flower Scoops</h3>
                <p className="text-xs text-gray-400">Artisan Ice Cream</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Creating magical ice cream experiences inspired by the beauty of flowers. 
              Every scoop is crafted with love and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#flavors" className="text-gray-300 hover:text-pink-400 transition-colors">Flavors</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Blossom Street</p>
              <p>Garden District, CA 90210</p>
              <p>(555) 123-FLOWER</p>
              <p>hello@flowerscoops.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Flower Scoops. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-pink-500 fill-current" />
              <span>for ice cream lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}