import { Button } from "./ui/button"
import { Menu, ShoppingCart, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-600">
              <span className="text-xl font-bold text-white">🌸</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-pink-600">Flower Scoops</h1>
              <p className="text-xs text-pink-400">Artisan Ice Cream</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Home
            </a>
            <a href="#flavors" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Flavors
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-600">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-600">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}