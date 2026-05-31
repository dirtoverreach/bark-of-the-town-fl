import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Hours from './components/Hours'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Skip link — first focusable element, hidden until focused */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:text-bark-green-dark focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Hours />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
