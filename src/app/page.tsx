import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, ArrowRight, Star, Home, Dumbbell, Receipt, Newspaper, HeadphonesIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0 font-sans">
      {/* TopAppBar */}
      <header className="bg-background/80 sticky top-0 backdrop-blur-md border-b border-border-dark flex justify-between items-center px-4 h-16 w-full z-50">
        <button className="text-gray-400 hover:text-gold transition-colors duration-300">
          <Menu className="w-6 h-6" />
        </button>
        <div className="text-xl md:text-2xl font-bold tracking-widest text-gold uppercase">
          Karen Fitness
        </div>
        <button className="text-gray-400 hover:text-gold transition-colors duration-300">
          <ShoppingBag className="w-6 h-6" />
        </button>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-6">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.05)] border border-border-dark flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0 bg-[#050505]">
             {/* We can place a subtle background pattern or image here */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/30 to-background z-10"></div>
          </div>
          <div className="relative z-20 flex flex-col items-center text-center p-6 gap-6 w-full">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4">
              <Image
                src="/logo.jpg"
                alt="Karen Fitness Logo"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] rounded-full"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 uppercase tracking-tighter drop-shadow-lg">
                Luxury Performance
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
                Descubre productos de belleza, ropa exclusiva y los mejores suplementos deportivos diseñados para tu bienestar integral.
              </p>
            </div>
            <Link href="/catalogo" className="bg-gold hover:bg-gold-hover text-black font-bold py-4 px-10 rounded-full transition-all duration-300 uppercase tracking-widest mt-6 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] inline-block">
              Explorar Tienda
            </Link>
          </div>
        </section>

        {/* Hot Products Section */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-8 border-b border-border-dark pb-4">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">Top Ventas</h2>
            <Link className="text-gold uppercase tracking-widest hover:text-gold-hover transition-colors flex items-center gap-2 text-sm font-semibold" href="/catalogo">
              Ver Todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="bg-surface border border-border-dark rounded-xl overflow-hidden group cursor-pointer transition-all hover:border-gold/30">
              <div className="h-64 overflow-hidden relative bg-[#0a0a0a] m-4 rounded-lg flex items-center justify-center">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgxXlJtfufNiW-rke5qVkhLVC3zP81bj_EnUPNzDSJwhiD5k0tXXNsGRzuxwTO2l9xzbiSpq6EY9oB53QFA6OSYR9Jgmx3C5OYFAvtEXSbiktbINClkAFC19GeUq9pYVLYsfgt0LoRoyXruX3dlBEOYhTXcvdQX5z8Oj9OJSlyr4ZVOVK8roBUjlkSTq4PBmHbTWKpIhEU7CJ7w1SRlCLhccB_TyFZBXVAN9OlxW4Ea-_aVFzPLoks" alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="px-6 pb-6 pt-2">
                <h3 className="text-lg text-white font-semibold mb-1 group-hover:text-gold transition-colors">Kettlebell Elite Gold 16kg</h3>
                <p className="text-gold font-bold">$120.00 USD</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-surface border border-border-dark rounded-xl overflow-hidden group cursor-pointer transition-all hover:border-gold/30 relative">
              <div className="absolute top-6 left-6 z-10 bg-gold text-black text-xs px-3 py-1.5 rounded-full uppercase font-bold shadow-md">BEST SELLER</div>
              <div className="h-64 overflow-hidden relative bg-[#0a0a0a] m-4 rounded-lg flex items-center justify-center">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3W5eTnydxP6Fh9YxRvacN4I99zrPmj7b-B9GabPAIyIP0lEwDrpDVsTOzLFotcqz7dAr1FkiWVBQRVXL_eZg7OL7u1XfpN3Q3GiU4EUSxmZBpzcIVrfNqOAsz_iFGrQLj8abe4zib6_7gtvr-GebphGKXVbzYu0e_BmEqU9rw8G-7tmQBbjAoJ4n85L6xFQ8omfaKZDUCyQuYfHFfdO7J11mJ1Rc_L3XSMNHZwOhQVFy491MswX2b" alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="px-6 pb-6 pt-2">
                <h3 className="text-lg text-white font-semibold mb-1 group-hover:text-gold transition-colors">Mancuernas Ajustables Pro</h3>
                <p className="text-gold font-bold">$450.00 USD</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-surface border border-border-dark rounded-xl overflow-hidden group cursor-pointer transition-all hover:border-gold/30">
              <div className="h-64 overflow-hidden relative bg-[#0a0a0a] m-4 rounded-lg flex items-center justify-center">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuALtjJHYVGSBXNZvZsza-MHjCsdGoLOE2ooMO6oEwez9G1o0kM2CQyZjydIYNImCvfAV2Ad715XzRSX1SmUQEYaGUeRPSdDwc2-csQXw2CHAS9TeSwTJkAXt74vzvumZRzEzj3DsXUaL9eywm_QYpg94O-3UZ1fz_JQZXGEoyAaGCHKObsK0JxQbqmdCMiYWFCKyuXV1Fp5WlJek__3xYcFpsY9sJkrJMTe4Pj6ga6ybqIxogijSWix" alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="px-6 pb-6 pt-2">
                <h3 className="text-lg text-white font-semibold mb-1 group-hover:text-gold transition-colors">Cinturón de Levantamiento Signature</h3>
                <p className="text-gold font-bold">$95.00 USD</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/catalogo" className="bg-surface text-gold font-bold py-4 px-12 rounded-full uppercase tracking-widest text-sm border border-gold hover:bg-gold hover:text-black transition-all duration-300 inline-block">
              Explorar todo el catálogo
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-24 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">Testimonios</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl font-bold text-white">4.9</span>
              <div className="flex text-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-gold" />
                ))}
              </div>
            </div>
            <p className="text-gray-400">
              Basado en cientos de clientas satisfechas en <span className="font-bold text-white">Karen Fitness</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "La calidad de la ropa deportiva es increíble, super cómoda y además me hace lucir genial mientras entreno.", author: "Sofía T." },
              { text: "Los suplementos me han ayudado muchísimo con mi progreso. Excelente servicio y atención personalizada.", author: "Andrea M." },
              { text: "Compré los productos de belleza para mi cuidado post-entreno y estoy enamorada de los resultados. ¡Recomendado 100%!", author: "Valentina G." },
            ].map((review, i) => (
              <div key={i} className="bg-surface p-8 border border-border-dark rounded-xl shadow-lg shadow-black">
                <div className="flex text-gold mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.text}"</p>
                <p className="text-white uppercase tracking-wider font-bold text-sm">- {review.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border-dark mt-12 flex flex-col gap-8 px-4 py-12 items-center text-center pb-32 md:pb-12">
        <div className="text-2xl font-bold text-gold tracking-widest uppercase">Karen Fitness</div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
          <a className="text-gray-400 hover:text-gold transition-colors" href="#">Política de Privacidad</a>
          <a className="text-gray-400 hover:text-gold transition-colors" href="#">Términos y Condiciones</a>
          <a className="text-gray-400 hover:text-gold transition-colors" href="#">Envíos y Devoluciones</a>
        </div>
        <div className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} KAREN FITNESS. C.A. - J-404236597
        </div>
      </footer>

      {/* BottomNavBar (Mobile) */}
      <nav className="bg-surface/95 backdrop-blur-md fixed bottom-0 w-full z-50 border-t border-border-dark flex justify-around items-center h-20 px-2 pb-safe md:hidden">
        <button className="flex flex-col items-center justify-center text-gold w-16">
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px]">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-gold w-16 transition-colors">
          <Dumbbell className="w-6 h-6 mb-1" />
          <span className="text-[10px]">Productos</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-gold w-16 transition-colors">
          <Receipt className="w-6 h-6 mb-1" />
          <span className="text-[10px]">Pedidos</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-gold w-16 transition-colors">
          <Newspaper className="w-6 h-6 mb-1" />
          <span className="text-[10px]">Novedades</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-gold w-16 transition-colors">
          <HeadphonesIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px]">Contacto</span>
        </button>
      </nav>
    </div>
  );
}
