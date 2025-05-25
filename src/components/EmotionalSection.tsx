export default function EmotionalSection() {
  return (
    <section className="relative w-full h-[80vh] bg-background">
      <div className="absolute inset-0">
        <img
          src="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/honda2-ledTGYmO7GeTTRvSyZBI7TG4Y0Cani.jpeg"
          alt="Rio Magdalena Honda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center">
          <h2 className="save-date text-3xl md:text-4xl mb-12">
            Nuestro Honda
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light mb-6">
            Honda es más que un destino, es el escenario donde nuestras historias 
            se entrelazan. Un pueblo mágico que ha visto crecer nuestro amor y 
            ahora nos recibe con los brazos abiertos para celebrar nuestra unión.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            Aquí, junto al majestuoso río Magdalena y sus aguas milenarias, 
            escribiremos el próximo capítulo de nuestra historia en la Ciudad de los Puentes.
          </p>
          <div className="decorative-line w-24 md:w-32 mx-auto mt-8"></div>
        </div>
      </div>
    </section>
  );
} 