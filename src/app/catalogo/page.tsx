"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingCart, Filter, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products, verify MongoDB connection:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);
  
  // Basic frontend search filter
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-24">
      {/* Top Navbar */}
      <header className="bg-background/95 backdrop-blur-md sticky top-0 border-b border-border-dark flex justify-between items-center px-4 md:px-8 h-20 w-full z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-gold transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Link href="/" className="flex items-center gap-3 ml-2">
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.jpg" 
                alt="Karent Fitness" 
                fill 
                className="object-contain rounded-full border border-gold/40" 
              />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-widest text-gold uppercase hidden sm:block">
              Catálogo
            </span>
          </Link>
        </div>
        <button className="text-gray-400 hover:text-gold transition-colors">
          <ShoppingCart className="w-6 h-6" />
        </button>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-8">
        
        {/* Search Bar Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-full border border-border-dark bg-[#0a0a0a] focus:ring-2 focus:ring-gold focus:border-gold transition-all outline-none text-white placeholder-gray-600 shadow-inner"
              placeholder="Buscar productos, suplementos, ropa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 bg-gold text-black px-6 py-4 rounded-full font-bold hover:bg-gold-hover transition-colors w-full md:w-auto justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Filter className="w-5 h-5" />
            Filtros
          </button>
        </div>

        {/* Results Info */}
        <div className="mb-6 text-gray-400 font-medium">
          Mostrando <span className="text-gold font-bold">{filteredProducts.length}</span> productos {searchTerm && `para "${searchTerm}"`}
        </div>

        {loading ? (
          <div className="w-full flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-gold animate-spin" />
          </div>
        ) : error ? (
          <div className="w-full text-center py-20 text-red-500 border border-dashed border-red-500 rounded-xl">
            Error al conectar con la base de datos MongoDB. Por favor, configura tu MONGODB_URI.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product._id} className="bg-surface border border-border-dark rounded-xl overflow-hidden group cursor-pointer hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col">
                <div className="relative h-64 w-full bg-white p-4 flex items-center justify-center">
                  <span className="absolute top-4 left-4 z-10 bg-black text-gold text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-wider shadow-md border border-gold/30">
                    {product.category}
                  </span>
                  
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                <div className="p-5 flex-grow flex flex-col justify-between bg-surface">
                  <div>
                    <h3 className="text-md text-white font-bold mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-gold font-extrabold text-lg">${product.price.toFixed(2)}</p>
                    <button className="bg-background border border-border-dark p-2 rounded-full text-gray-400 hover:bg-gold hover:text-black hover:border-gold transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-500 border border-dashed border-border-dark rounded-xl">
                No se encontraron productos que coincidan con tu búsqueda.
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
