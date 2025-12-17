import Footer from "@/composant/Footer/Footer";
import NewProduct from "@/composant/Product_slider/NewProduct";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-[80px]">
        <div className="text-center p-[20px] bg-white m-[20px] rounded-[10px]">
            <Image src="/images/The_shop.jpg" width={1200} height={400} alt="Bannère Livres" className="w-full max-h-[400px] object-cover rounded-[10px] "/>
            <h2 className="mt-[10px] text-[24px]">Bienvenue chez BookStore</h2>
            <div className="citation-block">
                <p className="italic text-[#444] text-[18px] mt-[10px] mb-[20px]">« Un livre est un rêve que vous tenez entre vos mains. »</p>
                <span className="block text-[16px] text-[#7a6d6d]">– Neil Gaiman</span>
            </div>
            <p className="mt-[30px] mb-[40px] text-[16px] text-[#555]">Explorez notre sélection exclusive de romans, mangas, BD, essais et livres pour tous les âges.</p>            
            <Link href="/catalogue"><button type="button" className="bg-[#654f4f] text-white px-[30px] py-[15px] rounded-[5px] hover:bg-[#a07e7e] transition">Explorer le Catalogue</button></Link>
        </div>
        <NewProduct/>
        {/*
        <section className="product">
            <h2>Nos Meilleures Ventes</h2>
            <div className="product-slider" id="product-slider">
 
            </div>
        </section>
        */}
  
    </div>
  );
}
