import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 pt-[90px] ">
      {/* --- Section À propos --- */}
      <section className="about bg-white p-6 max-w-[1000px] mx-auto rounded-[15px] my-[30px]">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          À propos de nous
        </h2>

        <div className="flex flex-col gap-8">
          {/* Mission */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#654f4f] mb-3">
              Notre Mission
            </h3>
            <p className="text-base text-gray-700">
              Chez <strong>BookStore</strong>, notre mission est de rendre la
              lecture accessible à tous en offrant une large sélection de livres
              pour tous les goûts et tous les âges. Nous croyons que la lecture
              est un moyen d’élargir ses horizons et de nourrir son esprit.
            </p>
          </div>

          {/* Équipe */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#654f4f] mb-3">
              Notre Équipe
            </h3>
            <p className="text-base text-gray-700">
              Notre équipe est composée de passionnés de littérature, toujours
              prêts à vous recommander les meilleurs livres, vous aider à
              trouver vos prochaines lectures et à vous offrir une expérience
              d'achat en ligne agréable et sécurisée.
            </p>
          </div>

          {/* Histoire */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#654f4f] mb-3">
              L'Histoire de BookStore
            </h3>
            <p className="text-base text-gray-700">
              BookStore a été fondé en 2020 avec l'idée simple de créer un
              espace en ligne où les lecteurs pouvaient trouver tous leurs
              livres préférés. Depuis, nous avons évolué pour devenir l'un des
              plus grands détaillants de livres en ligne, offrant non seulement
              des livres, mais aussi des services pour les amateurs de lecture.
            </p>
          </div>

          {/* Pourquoi Acheter */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#654f4f] mb-3">
              Pourquoi Acheter Chez Nous ?
            </h3>
            <p className="text-base text-gray-700">
              Nous proposons une large sélection de livres, un service client
              dédié, des recommandations personnalisées, et une livraison
              rapide. Notre plateforme est sécurisée et nous offrons des
              promotions régulières pour que vous puissiez profiter de vos
              livres préférés à des prix compétitifs.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section Contact --- */}
      <section className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 mt-[15px]">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contactez-nous
        </h2>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              Nom
            </label>
            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#8B5E3C] outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Votre email"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#8B5E3C] outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Votre message"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#8B5E3C] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B5E3C] hover:bg-[#6F4E2A] text-white py-3 rounded-lg font-semibold transition-transform duration-200 hover:scale-105"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}
