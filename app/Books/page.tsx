"use client";

import React, { useEffect, useState } from "react";
import AllProduct from "@/composant/Product_slider/AllProduct";
import { LuShoppingCart } from "react-icons/lu";

interface Book {
  id: number;
  titre: string;
  auteur: string;
  prix: string;
  image: string;
  categorie: string;
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartCount, setCartCount] = useState(0);

  // Charger les livres depuis un fichier JSON (ou API PHP)
  useEffect(() => {
    fetch("/books.json") // ou 'get_books.php'
      .then((res) => res.json())
      .then((data: Book[]) => {
        setBooks(data);
        setFilteredBooks(data);
        const cats = Array.from(new Set(data.map((b) => b.categorie)));
        setCategories(cats);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  // Filtrage dynamique
  useEffect(() => {
    const filtered = books.filter((book) => {
      const matchesSearch =
        book.titre.toLowerCase().includes(search.toLowerCase()) ||
        book.auteur.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "" || book.categorie === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredBooks(filtered);
  }, [search, selectedCategory, books]); // ce useEffect sera executer ac ahque un de ces var chnagent 

  // --- Gestion du panier ---
  const getCartItems = () => JSON.parse(localStorage.getItem("cart") || "[]");

  const updateCartCount = () => {
    const cart = getCartItems();
    setCartCount(cart.length);
  };

  const addToCart = (product: Book) => {
    const cart = getCartItems();
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  return (
    <div className="pt-[80px]">
      {/* Barre de recherche et panier */}
      <div className="flex justify-between items-center px-5 py-3 bg-white m-[20px] rounded-[10px] shadow-md">
        <span className="flex items-center gap-3 text-gray-600 text-[17px]">
          <input
            type="search"
            placeholder="Entrez un mot-clé..."
            className="px-3 py-2 border border-gray-300 rounded-md outline-none w-[500px] text-gray-700 text-[16px] focus:border-[#b4a49b] focus:shadow-[0_0_8px_rgba(212,144,121,0.3)] transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md outline-none text-gray-700 text-[16px] transition"
          >
            <option value="">Toutes les catégories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </span>

        <a
          href="/CardItems" 
          className="relative text-gray-600 hover:scale-110 transition inline-block"
        >
          <LuShoppingCart className="text-[28px] cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
            {cartCount}
          </span>
        </a>
      </div>

      {/* Section des produits */}
      <AllProduct books={filteredBooks} addToCart={addToCart} />
    </div>
  );
}
