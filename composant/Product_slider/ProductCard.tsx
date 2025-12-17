"use client";

import React from "react";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Image from "next/image";

type Props = {
  book: {
    id: number;
    titre: string;
    auteur: string;
    prix: string;
    image: string;
    categorie?: string;
    date_ajout?: string;
  };
  addToCart: (product: any) => void; // 🔹 fonction passée depuis le parent
};

export default function ProductCard({ book, addToCart }: Props) {
  if (!book) return null;
  return (
    <div className="max-w-[200px] min-w-[200px] relative bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition duration-300">
      {/* Icône panier */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(book);
        }}
        className="absolute top-3 right-3 text-gray-600 hover:text-blue-600 transition duration-200"
        aria-label="Ajouter au panier"
      >
        <HiOutlineShoppingCart size={22} />
      </button>

      {/* Lien vers la page de détails */}
      <Link href={`/Books/${book.id}`}>
        <Image
          src={book.image}
          alt={book.titre}
          width={100}
          height={400}
          className="w-full h-[200px] rounded-md mt-6"
        />
        <h3 className="text-[15px] font-semibold mt-3">{book.titre}</h3>
        <p className="text-[14px] text-gray-600">{book.auteur}</p>
        <p className="text-[14px] text-gray-700 font-medium mt-1">{book.prix}</p>
      </Link>
    </div>
  );
}
