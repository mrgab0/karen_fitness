"use client";

import { useState } from "react";
import { Search, ShoppingCart, Filter, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// 20 dummy products
const ALL_PRODUCTS = [
  // Suplementos
  { id: 1, name: "Proteína Whey Isolate 100% - Vainilla", category: "Suplementos", price: 45.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxXlJtfufNiW-rke5qVkhLVC3zP81bj_EnUPNzDSJwhiD5k0tXXNsGRzuxwTO2l9xzbiSpq6EY9oB53QFA6OSYR9Jgmx3C5OYFAvtEXSbiktbINClkAFC19GeUq9pYVLYsfgt0LoRoyXruX3dlBEOYhTXcvdQX5z8Oj9OJSlyr4ZVOVK8roBUjlkSTq4PBmHbTWKpIhEU7CJ7w1SRlCLhccB_TyFZBXVAN9OlxW4Ea-_aVFzPLoks" },
  { id: 2, name: "Pre-Entreno Explosive Energy", category: "Suplementos", price: 29.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3W5eTnydxP6Fh9YxRvacN4I99zrPmj7b-B9GabPAIyIP0lEwDrpDVsTOzLFotcqz7dAr1FkiWVBQRVXL_eZg7OL7u1XfpN3Q3GiU4EUSxmZBpzcIVrfNqOAsz_iFGrQLj8abe4zib6_7gtvr-GebphGKXVbzYu0e_BmEqU9rw8G-7tmQBbjAoJ4n85L6xFQ8omfaKZDUCyQuYfHFfdO7J11mJ1Rc_L3XSMNHZwOhQVFy491MswX2b" },
  { id: 3, name: "Creatina Monohidratada Pura", category: "Suplementos", price: 24.50, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtjJHYVGSBXNZvZsza-MHjCsdGoLOE2ooMO6oEwez9G1o0kM2CQyZjydIYNImCvfAV2Ad715XzRSX1SmUQEYaGUeRPSdDwc2-csQXw2CHAS9TeSwTJkAXt74vzvumZRzEzj3DsXUaL9eywm_QYpg94O-3UZ1fz_JQZXGEoyAaGCHKObsK0JxQbqmdCMiYWFCKyuXV1Fp5WlJek__3xYcFpsY9sJkrJMTe4Pj6ga6ybqIxogijSWix" },
  { id: 4, name: "BCAAs + Glutamina Recovery", category: "Suplementos", price: 34.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxXlJtfufNiW-rke5qVkhLVC3zP81bj_EnUPNzDSJwhiD5k0tXXNsGRzuxwTO2l9xzbiSpq6EY9oB53QFA6OSYR9Jgmx3C5OYFAvtEXSbiktbINClkAFC19GeUq9pYVLYsfgt0LoRoyXruX3dlBEOYhTXcvdQX5z8Oj9OJSlyr4ZVOVK8roBUjlkSTq4PBmHbTWKpIhEU7CJ7w1SRlCLhccB_TyFZBXVAN9OlxW4Ea-_aVFzPLoks" },
  { id: 5, name: "Quemador de Grasa Thermogenic", category: "Suplementos", price: 39.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3W5eTnydxP6Fh9YxRvacN4I99zrPmj7b-B9GabPAIyIP0lEwDrpDVsTOzLFotcqz7dAr1FkiWVBQRVXL_eZg7OL7u1XfpN3Q3GiU4EUSxmZBpzcIVrfNqOAsz_iFGrQLj8abe4zib6_7gtvr-GebphGKXVbzYu0e_BmEqU9rw8G-7tmQBbjAoJ4n85L6xFQ8omfaKZDUCyQuYfHFfdO7J11mJ1Rc_L3XSMNHZwOhQVFy491MswX2b" },
  
  // Ropa
  { id: 6, name: "Leggings Seamless Alta Compresión", category: "Ropa", price: 55.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtjJHYVGSBXNZvZsza-MHjCsdGoLOE2ooMO6oEwez9G1o0kM2CQyZjydIYNImCvfAV2Ad715XzRSX1SmUQEYaGUeRPSdDwc2-csQXw2CHAS9TeSwTJkAXt74vzvumZRzEzj3DsXUaL9eywm_QYpg94O-3UZ1fz_JQZXGEoyAaGCHKObsK0JxQbqmdCMiYWFCKyuXV1Fp5WlJek__3xYcFpsY9sJkrJMTe4Pj6ga6ybqIxogijSWix" },
  { id: 7, name: "Top Deportivo Alto Impacto", category: "Ropa", price: 35.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxXlJtfufNiW-rke5qVkhLVC3zP81bj_EnUPNzDSJwhiD5k0tXXNsGRzuxwTO2l9xzbiSpq6EY9oB53QFA6OSYR9Jgmx3C5OYFAvtEXSbiktbINClkAFC19GeUq9pYVLYsfgt0LoRoyXruX3dlBEOYhTXcvdQX5z8Oj9OJSlyr4ZVOVK8roBUjlkSTq4PBmHbTWKpIhEU7CJ7w1SRlCLhccB_TyFZBXVAN9OlxW4Ea-_aVFzPLoks" },
  { id: 8, name: "Camiseta Dry-Fit Entrenamiento", category: "Ropa", price: 28.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3W5eTnydxP6Fh9YxRvacN4I99zrPmj7b-B9GabPAIyIP0lEwDrpDVsTOzLFotcqz7dAr1FkiWVBQRVXL_eZg7OL7u1XfpN3Q3GiU4EUSxmZBpzcIVrfNqOAsz_iFGrQLj8abe4zib6_7gtvr-GebphGKXVbzYu0e_BmEqU9rw8G-7tmQBbjAoJ4n85L6xFQ8omfaKZDUCyQuYfHFfdO7J11mJ1Rc_L3XSMNHZwOhQVFy491MswX2b" },
  { id: 9, name: "Shorts Deportivos con Malla", category: "Ropa", price: 42.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtjJHYVGSBXNZvZsza-MHjCsdGoLOE2ooMO6oEwez9G1o0kM2CQyZjydIYNImCvfAV2Ad715XzRSX1SmUQEYaGUeRPSdDwc2-csQXw2CHAS9TeSwTJkAXt74vzvumZRzEzj3DsXUaL9eywm_QYpg94O-3UZ1fz_JQZXGEoyAaGCHKObsK0JxQbqmdCMiYWFCKyuXV1Fp5WlJek__3xYcFpsY9sJkrJMTe4Pj6ga6ybqIxogijSWix" },
  { id: 10, name: "Sudadera Oversize Karen Fitness", category: "Ropa", price: 65.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxXlJtfufNiW-rke5qVkhLVC3zP81bj_EnUPNzDSJwhiD5k0tXXNsGRzuxwTO2l9xzbiSpq6EY9oB53QFA6OSYR9Jgmx3C5OYFAvtEXSbiktbINClkAFC19GeUq9pYVLYsfgt0LoRoyXruX3dlBEOYhTXcvdQX5z8Oj9OJSlyr4ZVOVK8roBUjlkSTq4PBmHbTWKpIhEU7CJ7w1SRlCLhccB_TyFZBXVAN9OlxW4Ea-_aVFzPLoks" },

  // Implementos
  { id: 11, name: "Mancuernas Ajustables 24kg (Par)", category: "Implementos", price: 199.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3W5eTnydxP6Fh9YxRvacN4I99zrPmj7b-B9GabPAIyIP0lEwDrpDVsTOzLFotcqz7dAr1FkiWVBQRVXL_eZg7OL7u1XfpN3Q3GiU4EUSxmZBpzcIVrfNqOAsz_iFGrQLj8abe4zib6_7gtvr-GebphGKXVbzYu0e_BmEqU9rw8G-7tmQBbjAoJ4n85L6xFQ8omfaKZDUCyQuYfHFfdO7J11mJ1Rc_L3XSMNHZwOhQVFy491MswX2b" },
  { id: 12, name: "Bandas de Resistencia Set de 5", category: "Implementos", price: 22.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtjJHYVGSBXNZvZsza-MHjCsdGoLOE2ooMO6oEwez9G1o0kM2CQyZjydIYNImCvfAV2Ad715XzRSX1SmUQEYaGUeRPSdDwc2-csQXw2CHAS9TeSwTJkAXt74vzvumZRzEzj3DsXUaL9eywm_QYpg94O-3UZ1fz_JQZXGEoyAaGCHKObsK0JxQbqmdCMiYWFCKyuXV1Fp5WlJek__3xYcFpsY9sJkrJMTe4Pj6ga6ybqIxogijSWix" },
  { id: 13, name: "Kettlebell de Hierro Fundido 16kg", category: "Implementos", price: 45.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxXlJtfufNiW-rke5qVkhLVC3zP81bj_EnUPNzDSJwhiD5k0tXXNsGRzuxwTO2l9xzbiSpq6EY9oB53QFA6OSYR9Jgmx3C5OYFAvtEXSbiktbINClkAFC19GeUq9pYVLYsfgt0LoRoyXruX3dlBEOYhTXcvdQX5z8Oj9OJSlyr4ZVOVK8roBUjlkSTq4PBmHbTWKpIhEU7CJ7w1SRlCLhccB_TyFZBXVAN9OlxW4Ea-_aVFzPLoks" },
  { id: 14, name: "Cinturón de Levantamiento de Cuero", category: "Implementos", price: 59.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3W5eTnydxP6Fh9YxRvacN4I99zrPmj7b-B9GabPAIyIP0lEwDrpDVsTOzLFotcqz7dAr1FkiWVBQRVXL_eZg7OL7u1XfpN3Q3GiU4EUSxmZBpzcIVrfNqOAsz_iFGrQLj8abe4zib6_7gtvr-GebphGKXVbzYu0e_BmEqU9rw8G-7tmQBbjAoJ4n85L6xFQ8omfaKZDUCyQuYfHFfdO7J11mJ1Rc_L3XSMNHZwOhQVFy491MswX2b" },
  { id: 15, name: "Tapete de Yoga Antideslizante Premium", category: "Implementos", price: 39.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtjJHYVGSBXNZvZsza-MHjCsdGoLOE2ooMO6oEwez9G1o0kM2CQyZjydIYNImCvfAV2Ad715XzRSX1SmUQEYaGUeRPSdDwc2-csQXw2CHAS9TeSwTJkAXt74vzvumZRzEzj3DsXUaL9eywm_QYpg94O-3UZ1fz_JQZXGEoyAaGCHKObsK0JxQbqmdCMiYWFCKyuXV1Fp5WlJek__3xYcFpsY9sJkrJMTe4Pj6ga6ybqIxogijSWix" },

  // Belleza
  { id: 16, name: "Crema Hidratante Post-Entreno", category: "Belleza", price: 25.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxXlJtfufNiW-rke5qVkhLVC3zP81bj_EnUPNzDSJwhiD5k0tXXNsGRzuxwTO2l9xzbiSpq6EY9oB53QFA6OSYR9Jgmx3C5OYFAvtEXSbiktbINClkAFC19GeUq9pYVLYsfgt0LoRoyXruX3dlBEOYhTXcvdQX5z8Oj9OJSlyr4ZVOVK8roBUjlkSTq4PBmHbTWKpIhEU7CJ7w1SRlCLhccB_TyFZBXVAN9OlxW4Ea-_aVFzPLoks" },
  { id: 17, name: "Bálsamo Labial Protector SPF 30", category: "Belleza", price: 12.50, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3W5eTnydxP6Fh9YxRvacN4I99zrPmj7b-B9GabPAIyIP0lEwDrpDVsTOzLFotcqz7dAr1FkiWVBQRVXL_eZg7OL7u1XfpN3Q3GiU4EUSxmZBpzcIVrfNqOAsz_iFGrQLj8abe4zib6_7gtvr-GebphGKXVbzYu0e_BmEqU9rw8G-7tmQBbjAoJ4n85L6xFQ8omfaKZDUCyQuYfHFfdO7J11mJ1Rc_L3XSMNHZwOhQVFy491MswX2b" },
  { id: 18, name: "Gel Refrescante para Músculos Cansados", category: "Belleza", price: 28.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALtjJHYVGSBXNZvZsza-MHjCsdGoLOE2ooMO6oEwez9G1o0kM2CQyZjydIYNImCvfAV2Ad715XzRSX1SmUQEYaGUeRPSdDwc2-csQXw2CHAS9TeSwTJkAXt74vzvumZRzEzj3DsXUaL9eywm_QYpg94O-3UZ1fz_JQZXGEoyAaGCHKObsK0JxQbqmdCMiYWFCKyuXV1Fp5WlJek__3xYcFpsY9sJkrJMTe4Pj6ga6ybqIxogijSWix" },
  { id: 19, name: "Spray Facial Hidratante de Rosas", category: "Belleza", price: 18.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgxXlJtfufNiW-rke5qVkhLVC3zP81bj_EnUPNzDSJwhiD5k0tXXNsGRzuxwTO2l9xzbiSpq6EY9oB53QFA6OSYR9Jgmx3C5OYFAvtEXSbiktbINClkAFC19GeUq9pYVLYsfgt0LoRoyXruX3dlBEOYhTXcvdQX5z8Oj9OJSlyr4ZVOVK8roBUjlkSTq4PBmHbTWKpIhEU7CJ7w1SRlCLhccB_TyFZBXVAN9OlxW4Ea-_aVFzPLoks" },
  { id: 20, name: "Exfoliante Corporal Revitalizante", category: "Belleza", price: 22.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3W5eTnydxP6Fh9YxRvacN4I99zrPmj7b-B9GabPAIyIP0lEwDrpDVsTOzLFotcqz7dAr1FkiWVBQRVXL_eZg7OL7u1XfpN3Q3GiU4EUSxmZBpzcIVrfNqOAsz_iFGrQLj8abe4zib6_7gtvr-GebphGKXVbzYu0e_BmEqU9rw8G-7tmQBbjAoJ4n85L6xFQ8omfaKZDUCyQuYfHFfdO7J11mJ1Rc_L3XSMNHZwOhQVFy491MswX2b" }
];

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Basic frontend search filter (simulating Elasticsearch behavior for now)
  const filteredProducts = ALL_PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-24">
      {/* Top Navbar */}
      <header className="bg-background/90 backdrop-blur-md sticky top-0 border-b border-border-dark flex justify-between items-center px-4 h-16 w-full z-50">
        <Link href="/" className="text-gray-400 hover:text-gold transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="text-xl font-bold tracking-widest text-gold uppercase">
          Catálogo
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-surface border border-border-dark rounded-xl overflow-hidden group cursor-pointer hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col">
              {/* Contenedor de la foto con FONDO BLANCO */}
              <div className="relative h-64 w-full bg-white p-4 flex items-center justify-center">
                {/* Categoría Badge */}
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
              
              {/* Información del producto (Tema Oscuro) */}
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
      </main>
    </div>
  );
}
