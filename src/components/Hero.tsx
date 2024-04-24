// Hero.tsx
import Image from "next/image";
import banner from '@/assets/banner.webp'

export default function Hero() {
    return (
        <div id="home" className="block h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-56 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="text-left mb-4">
                    <h1 className="text-lg md:text-6xl mb-6"><strong>Sociallife</strong> - serviço de promoção em redes sociais</h1>
                    <p className="text-sm md:text-lg text-gray-500 font-bold mb-4 pr-0 lg:pr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptates sunt possimus atque non excepturi maxime ex expedita tempora quaerat, animi et aspernatur blanditiis quas laboriosam praesentium iure corrupti id.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <button className="bg-purple-custom text-white text-2xl font-bold py-3 mb-6 lg:mb-0 px-12 rounded-full swv">
                        Experimente
                    </button>
                    <button className="bg-none hidden lg:block flex flex-row items-center text-white text-2xl font-bold py-3 px-10 rounded">
                        <div className="flex">
                            Inscreva-se
                        </div>
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <Image src={banner} priority alt="Logo" width={1000} height={32} />
            </div>
        </div>
    );
}
