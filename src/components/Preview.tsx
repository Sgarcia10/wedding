export default function Preview() {
  return (
    <div className="relative w-[1200px] h-[630px] bg-background overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/honda-I3Pw0ez3aKs8gKhw52Su2rdlYEp8rQ.jpeg"
          alt="Wedding Location"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="names text-7xl mb-8">
          Juanis & Santi
        </h1>
        
        <div className="decorative-line w-48 mx-auto my-8"></div>
        
        <div className="save-date">
          <div className="text-3xl mb-4">Save the date</div>
          <div className="text-6xl font-light tracking-widest">06 · 12 · 2025</div>
        </div>
        
        <div className="mt-8 text-2xl tracking-wider">
          Honda, Tolima
        </div>
      </div>
    </div>
  );
} 