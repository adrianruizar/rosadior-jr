import { Facebook, Instagram, MapPin, Phone, Clock, Mail, ShoppingCart, Star } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg")'
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
            <h2 className="text-3xl font-semibold text-gray-800">Visítanos</h2>
            
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
                <p>contacto@rosadiorjr.com</p>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <ShoppingCart className="w-5 h-5" />
                <a 
                  href="https://tienda.rosadiorjr.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Visita nuestra tienda online
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://facebook.com/rosadiorjr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Facebook className="w-6 h-6 text-gray-700" />
              </a>
              <a 
                href="https://instagram.com/rosadiorjr" 
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.593157562454!2d-58.50127492427471!3d-34.63669465930489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9983ba702c1%3A0x7fc89e08e770c9e8!2sRosa%20Dior%20Jr!5e0!3m2!1sen!2sus!4v1709764429544!5m2!1sen!2sus"
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
            href="https://g.page/r/CejCcOh3dwnPEBM/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Star className="w-5 h-5" />
            <span>¿Te gustó nuestra atención? ¡Déjanos tu opinión en Google!</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Rosa Dior Jr. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App