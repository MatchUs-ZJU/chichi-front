import { Heart, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '首页', href: '#hero' },
    { label: '功能', href: '#features' },
    { label: '流程', href: '#steps' },
    { label: '权益', href: '#benefits' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-primary-600 
                          flex items-center justify-center shadow-lg shadow-violet-500/30
                          group-hover:shadow-violet-500/50 transition-shadow duration-300">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold gradient-text">赤赤说媒</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-violet-600 font-medium transition-colors duration-200 
                         relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                         after:bg-violet-500 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#cta"
              className="bg-gradient-to-r from-violet-500 to-primary-600 text-white px-6 py-2.5 rounded-full 
                       font-medium shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 
                       hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              立即体验
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-violet-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-violet-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-violet-100">
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 rounded-xl text-gray-600 hover:text-violet-600 hover:bg-violet-50 
                           font-medium transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 bg-gradient-to-r from-violet-500 to-primary-600 text-white px-6 py-3 
                         rounded-xl font-medium text-center shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                立即体验
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
