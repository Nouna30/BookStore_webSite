"use client";

import React from "react";
import ProductCard from "./ProductCard";

interface Book {
  id: number;
  titre: string;
  auteur: string;
  prix: string;
  image: string;
  categorie: string;
}

interface Props {
  books: Book[];
  addToCart: (book: Book) => void;
}

const AllProduct: React.FC<Props> = ({ books, addToCart }) => {
  return (
    <div className="text-center p-[20px] bg-white m-[40px] rounded-[10px]">
      {books.length > 0 ? (
        <div className="flex flex-wrap gap-8 overflow-y-auto max-h-[500px] p-[10px] relative">
          {books.map((book) => (
            <ProductCard key={book.id} book={book} addToCart={addToCart} />
          ))}
        </div>
      ) : ( 
        <p className="text-center text-gray-500">Aucun livre trouvé.</p>
      )}
    </div>
  );
};

export default AllProduct;
