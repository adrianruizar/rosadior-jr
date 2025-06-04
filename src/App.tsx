import { Facebook, Instagram, MapPin, Phone, Clock, Mail, ShoppingCart, Star } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://adrianruiz.ar/rosadiorjr/banner-principal.png")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white tracking-wider mb-4">ROSADIOR JR</h1>
          <p className="text-xl text-white tracking-wide">Otoño / Invierno 2025</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800">Visitanos</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <p>San Martín 331, Quitilipi (3530), Chaco - Argentina.</p>
              </div>
              
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <a 
                  href="https://wa.me/5493624565164" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  +54 9 362 4565164
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <p>Lunes a Sábado: 8:30 a 12 hs - 17 a 21 hs</p>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <p>rosadiorjunior@gmail.com</p>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <ShoppingCart className="w-5 h-5" />
                <a 
                  href="https://tienda.rosadiorjr.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Muy pronto... tienda online
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/rosadiorjr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Facebook className="w-6 h-6 text-gray-700" />
              </a>
              <a 
                href="https://www.instagram.com/rosadiorjr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Instagram className="w-6 h-6 text-gray-700" />
              </a>
            </div>
          </div>

          <div className="h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.53231735762543!2d-60.217854263719694!3d-26.872266850676766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9446c949db0eb26d%3A0xc2f5c604d70b28ce!2sROSADIOR%20JR!5e0!3m2!1ses!2sar!4v1749038258704!5m2!1ses!2sar"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Google Maps Review Link */}
        <div className="mt-8 text-center">
          <a 
            href="https://g.page/r/Cc4oC9cExvXCEBM/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Star className="w-5 h-5" />
            <span>¿Te gustó nuestro atención? ¡Dejanos tu opinión!</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 ROSADIOR JR - Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App