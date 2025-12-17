"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { HiOutlineTrash } from "react-icons/hi2"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([])

  const getCartItems = () => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("cart")
      return data ? JSON.parse(data) : []
    }
    return []
  }

  const updateCartDisplay = () => {
    const cart = getCartItems()
    const groupedItems = cart.reduce((tab: any[], item: any) => {
      const existingItem = tab.find((i: any) => i.titre === item.titre)
      if (existingItem) existingItem.count = (existingItem.count || 1) + 1
      else tab.push({ ...item, count: 1 })
      return tab
    }, [])
    setCartItems(groupedItems)
  }

  
  const handleRemove = (title: string) => {
    let cart = getCartItems()
    const indexToRemove = cart.findIndex((item: any) => item.titre === title)
    if (indexToRemove !== -1) {
      cart.splice(indexToRemove, 1)
      localStorage.setItem("cart", JSON.stringify(cart))
      updateCartDisplay()
    }
  }

  useEffect(() => {
    updateCartDisplay()
  }, [])


  const totalPrice = cartItems.reduce(
    (sum: number, item: any) => sum + parseFloat(item.prix) * item.count,
    0
  )
  const totalCount = cartItems.reduce((sum: number, item: any) => sum + item.count, 0)

  return (
    <main className="min-h-screen bg-gray-50 py-30 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#4B2E05]">Votre Panier</h2>

      {cartItems.length === 0 ? (
        <>
          <p className="text-center text-gray-600">Votre panier est vide.</p>
          <div className="flex justify-center">
            <button
                  onClick={() => (window.location.href = "/Books")}
                  className="w-[30%] mt-3 text-[#8B5E3C] border border-[#8B5E3C] py-3 rounded-full hover:bg-[#8B5E3C] hover:text-white transition"
                >
                  Revenir a la page d'aceuille
            </button>
          </div>
        </>
      ) : (
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* liste de livre */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 hidden sm:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left text-gray-700">
                  <th className="pb-3">Produit</th>
                  <th className="pb-3">Prix</th>
                  <th className="pb-3 text-center">Quantité</th>
                  <th className="pb-3 text-right">Sous-total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="flex items-center gap-4 py-4">
                      <Image
                        src={item.image || "/images/default-book.jpg"}
                        alt={item.titre}
                        width={70}
                        height={100}
                        className="rounded-lg shadow-sm object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.titre}</h3>
                        <p className="text-sm text-gray-600">{item.auteur}</p>
                      </div>
                    </td>
                    <td className="text-gray-800">{item.prix} DZD</td>
                    <td className="text-center text-gray-700 font-medium">{item.count}</td>
                    <td className="text-right text-gray-900 font-semibold">
                      {parseFloat(item.prix) * item.count} DZD
                    </td>
                    <td className="text-right">
                  <button
                    onClick={() => handleRemove(item.titre)}
                    className="m-5 p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
                  >
                    <HiOutlineTrash size={22} />
                  </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 block sm:hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left text-gray-700">
                  <th className="pb-3">Produit</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="flex items-center gap-4 py-4">
                      <Image
                        src={item.image || "/images/default-book.jpg"}
                        alt={item.titre}
                        width={70}
                        height={100}
                        className="rounded-lg shadow-sm object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.titre}</h3>
                        <p className="text-sm text-gray-600">{item.auteur}</p>
                        <p className="text-gray-800">{item.prix} X {item.count}</p>
                      </div>
                    </td>
                    <td className="text-right">
                  <button
                    onClick={() => handleRemove(item.titre)}
                    className="m-5 p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"
                  >
                    <HiOutlineTrash size={22} />
                  </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* resume panier */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <h3 className="text-xl font-semibold text-[#4B2E05] mb-4">Résumé du Panier</h3>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Articles :</span>
              <span>{totalCount}</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Sous-total :</span>
              <span>{totalPrice} DZD</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Livraison :</span>
              <span>Gratuite</span>
            </div>

            <div className="border-t mt-3 pt-3 flex justify-between text-lg font-semibold text-[#4B2E05]">
              <span>Total :</span>
              <span>{totalPrice} DZD</span>
            </div>

            <button className="w-full mt-6 bg-[#8B5E3C] hover:bg-[#6F4E2A] text-white py-3 rounded-full shadow-md font-medium transition-transform hover:scale-105">
              Confirmer l’achat
            </button>
            <button
              onClick={() => (window.location.href = "/Books")}
              className="w-full mt-3 text-[#8B5E3C] border border-[#8B5E3C] py-3 rounded-full hover:bg-[#8B5E3C] hover:text-white transition"
            >
              Continuer vos achats
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
