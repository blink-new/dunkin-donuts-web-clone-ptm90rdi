import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeaturedFlavors } from './components/FeaturedFlavors'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedFlavors />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App