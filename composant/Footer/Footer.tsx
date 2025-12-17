import Image from "next/image";
import React from "react";
import { LuBookOpen } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="pt-16 pb-10 bg-[#b4a49b] dark:bg-gray-900">
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 items-start">

        <div className="xl:col-span-2">
          <div className="flex items-center space-x-2">
            <div className="w-14 h-14 dark:bg-white rounded-full flex items-center justify-center">
              <Image src="/images/logo.jpg" alt="logo" width={45} height={45} className='rounded-full' />
            </div>
            <h1 className="text-xl md:text-2xl text-white dark:text-white font-bold">
              BookStore
            </h1>
          </div>
          <p className="mt-4 text-sm text-gray-800 dark:text-gray-400">
            Découvrez un monde de lecture : romans, mangas, bandes dessinées et ouvrages inspirants pour petits et grands.  
            Chez <strong>BookStore</strong>, chaque livre est une nouvelle aventure.
          </p>

          <div className="mt-5">
            <h1 className="text-base lg:text-lg text-gray-700 dark:text-gray-300 font-medium">
              Contactez-nous
            </h1>
            <p className="mt-1 text-gray-800 dark:text-gray-300 font-semibold">
              +213 558 930 428
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400 mt-2">
              Alger, Algérie
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-400 mt-2">
              contact@bookstore.dz
            </p>
          </div>
        </div>


        <div className="space-y-4">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Explorer
          </h1>
          <p className="footer_link">Nouveautés</p>
          <p className="footer_link">Meilleures ventes</p>
          <p className="footer_link">Catégories</p>
          <p className="footer_link">Promotions</p>
        </div>

        <div className="space-y-4">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            À propos
          </h1>
          <p className="footer_link">Notre histoire</p>
          <p className="footer_link">Nos valeurs</p>
          <p className="footer_link">FAQ</p>
          <p className="footer_link">Contact</p>
        </div>


        <div className="space-y-4">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Aide & Support
          </h1>
          <p className="footer_link">Livraison & retours</p>
          <p className="footer_link">Suivi de commande</p>
          <p className="footer_link">Paiement sécurisé</p>
          <p className="footer_link">Service client</p>
        </div>
      </div>


      <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800">
        <p className="text-gray-800 dark:text-gray-400 text-sm text-center">
          © 2025 <strong>BookStore</strong>. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
