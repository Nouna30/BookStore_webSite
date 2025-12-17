"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { HiOutlineShoppingCart } from "react-icons/hi2";

// Fonction existante
async function fetchBook(id: string) {
  try {
    const response = await fetch("http://localhost:3000/books.json");
    if (!response.ok) return null;

    const books = await response.json();
    const numericId = parseInt(id, 10);
    const book = books.find((b: { id: number }) => b.id === numericId);
    console.log(book);
    return book || null;
  } catch (error) {
    console.error("Erreur lors du chargement du livre :", error);
    return null;
  }
}

export default function BookPage() {
  const params = useParams();
  const { IdBook } = params;
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    if (!IdBook) return;
    fetchBook(IdBook as string).then((data) => {
      if (!data) notFound();
      setBook(data);
    });
  }, [IdBook]);

  const getCartItems = () => {
    if (typeof window === "undefined") return [];
    const storage = localStorage.getItem("cart");
    return storage ? JSON.parse(storage) : [];
  };

  const addToCart = (product: any) => {
    const cart = getCartItems();
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.titre} a été ajouté au panier !`);
  };

  if (!book)
    return (
      <div className="text-center text-gray-600 py-10 text-lg">
        Chargement du livre...
      </div>
    );

  return (
    <div className="pt-[100px] pb-20 px-5 md:px-20 bg-gray-50 min-h-screen">
      <div className="relative flex justify-between items-start gap-5 p-5 md:p-8 bg-white rounded-xl shadow-md book-details-container">
        {/* Image + bouton panier */}
        <div className="relative">
          <Image
            src={book.image}
            alt={book.titre}
            width={300}
            height={400}
            className="rounded-xl object-cover max-h-full"
          />
        </div>
            {/* Détails */}
            <div className="flex-1 max-h-[500px] overflow-y-auto pt-5 pb-5 pr-10 pl-10 bg-[#f9f9f9] rounded-lg text-start flex flex-col justify-start items-start details">
                <h2 className="text-[30px] mb-4 text-[#333] font-bold">{book.titre}</h2>

                <p className="text-[16px] mb-0 text-[#555]">
                    <strong className="text-[#2c3e50] font-bold">Auteur :</strong> {book.auteur}
                </p>
                {book.date_publication && (
                    <p className="text-[16px] mb-0 text-[#555]">
                    <strong className="text-[#2c3e50] font-bold">Date de publication :</strong>{" "}
                    {book.date_publication}
                    </p>
                )}
                {book.categorie && (
                    <p className="text-[16px] mb-0 text-[#555]">
                    <strong className="text-[#2c3e50] font-bold">Catégorie :</strong>{" "}
                    {book.categorie}
                    </p>
                )}
                {book.chapitres && (
                    <p className="text-[16px] mb-0 text-[#555]">
                    <strong className="text-[#2c3e50] font-bold">Chapitres :</strong>{" "}
                    {book.chapitres}
                    </p>
                )}
                {book.langue && (
                    <p className="text-[16px] mb-0 text-[#555]">
                    <strong className="text-[#2c3e50] font-bold">Langue :</strong> {book.langue}
                    </p>
                )}
                {book.description_longue && (
                    <p className="text-[16px] mb-0 text-[#555] mt-2">
                    <strong className="text-[#2c3e50] font-bold">Description :</strong>{" "}
                    {book.description_longue}
                    </p>
                )}
                {book.auteur_description && (
                    <p className="text-[16px] mb-0 text-[#555]">
                    <strong className="text-[#2c3e50] font-bold">Biographie :</strong>{" "}
                    {book.auteur_description}
                    </p>
                )}
                {book.Intrigue && (
                    <p className="text-[16px] mb-0 text-[#555]">
                    <strong className="text-[#2c3e50] font-bold">Intrigue :</strong>{" "}
                    {book.Intrigue}
                    </p>
                )}
                <div className="w-full flex justify-center mt-10">
                    <button
                        onClick={() => addToCart(book)}
                        className="flex items-center justify-center gap-2 bg-[#8B5E3C] hover:bg-[#6F4E2A] text-white px-6 py-3 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
                    >
                        <HiOutlineShoppingCart size={22} />
                        <span className="font-medium">Ajouter au panier — {book.prix}</span>
                    </button>
                </div>
            </div>
      </div>
    </div>
  );
}
