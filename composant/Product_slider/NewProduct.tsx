"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Book {
  id: number;
  titre: string;
  auteur: string;
  prix: string;
  image: string;
  date_ajout: string;
  categorie?: string;
}

interface Props {
  books: Book[];
  addToCart: (book: Book) => void;
}
const NewProduct = () => {
  const [books, setBooks] = useState<Book[]>([]);

  // 🔹 Fonction pour récupérer le mois le plus récent
  const getMostRecentMonthBooks = (books: Book[]) => {
    if (books.length === 0) return [];

    const dates = books.map((b) => new Date(b.date_ajout));
    const latestDate = new Date(Math.max(...dates.map((d) => d.getTime())));
    const latestMonth = latestDate.getMonth();
    const latestYear = latestDate.getFullYear();

    return books.filter((b) => {
      const d = new Date(b.date_ajout);
      return d.getMonth() === latestMonth && d.getFullYear() === latestYear;
    });
  };

  const getCartItems = () => JSON.parse(localStorage.getItem("cart") || "[]");


  const addToCart = (product: Book) => {
    const cart = getCartItems();
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };


  // 🔹 Charger le fichier JSON local
  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        const recentBooks = getMostRecentMonthBooks(data);
        setBooks(recentBooks);
      })
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
  <div className="mb-15">
        <h2 className="text-2xl font-bold mt-10 text-center text-black">
          Nouveautés du mois
        </h2>
      <div className="text-center p-[20px]  bg-white m-[20px] rounded-[10px]">
        {books.length > 0 ? (
          <div className="flex overflow-x-scroll gap-[30px] p-[10px] relative z-0">
            {books.map((book) => (
              <ProductCard key={book.id} book={book} addToCart={addToCart}/>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Aucun livre trouvé pour le mois le plus récent.
          </p>
        )}
      </div>
  </div>
  );
};

export default NewProduct;
