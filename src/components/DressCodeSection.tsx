export default function DressCodeSection() {
  return (
    <section className="relative w-full min-h-[80vh] bg-[#1a1a1a] py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-accent/30 rounded-tr-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/30 rounded-bl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/30 rounded-br-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="save-date text-4xl md:text-5xl mb-8 text-white">
            Etiqueta
          </h2>
          
          <div className="decorative-line w-48 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Women's Section */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/outfit_women.jpg"
                  alt="Women's Dress Code"
                  className="w-full h-full object-cover"
                />
                {/* Mobile overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-6 md:hidden">
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-light text-white">Para Ellas</h3>
                    <p className="text-white/80 font-light">
                      Vestido largo en tonos vibrantes
                    </p>
                    <p className="text-sm text-white/60 italic mt-4">
                      El color blanco o tonos similares están reservados para la novia.
                    </p>
                  </div>
                </div>
              </div>
              {/* Desktop text - hidden on mobile */}
              <div className="hidden md:block space-y-3 mt-8">
                <h3 className="text-2xl font-light text-white">Para Ellas</h3>
                <p className="text-white/80 font-light">
                  Vestido largo en tonos vibrantes
                </p>
                <p className="text-sm text-white/60 italic mt-4">
                  El color blanco o tonos similares están reservados para la novia.
                </p>
              </div>
            </div>

            {/* Men's Section */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/outfit_men.jpg"
                  alt="Men's Dress Code"
                  className="w-full h-full object-cover"
                />
                {/* Mobile overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-6 md:hidden">
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-light text-white">Para Ellos</h3>
                    <p className="text-white/80 font-light">
                      Guayabera manga larga en tonos claros
                    </p>
                  </div>
                </div>
              </div>
              {/* Desktop text - hidden on mobile */}
              <div className="hidden md:block space-y-3 mt-8">
                <h3 className="text-2xl font-light text-white">Para Ellos</h3>
                <p className="text-white/80 font-light">
                  Guayabera manga larga en tonos claros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 