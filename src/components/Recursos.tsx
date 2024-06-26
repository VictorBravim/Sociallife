// Recursos.tsx
import Image from "next/image";
import banner2 from '@/assets/banner2.webp'

export default function Recursos() {
    return (
        <div id="recursos" className="block h-full lg:h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-56 lg:pt-0 pt-12bg-cover bg-center mb-24 lg:mb-0" style={{ backgroundImage: "url('/bg4.webp')" }}>
            <div className="w-full lg:w-1/2 flex items-center justify-center mr-0 lg:mr-20 mb-12 lg:mb-0">
                <Image src={banner2} alt="Logo" quality={100} width={1000} height={1000} />
            </div>
            <div className="relative z-10 text-white w-full lg:w-1/2">
                <div className="w-1/2 text-center lg:text-left text-white mb-6">
                    <p className="bg-pink-700 text-center p-0 mr-20 lg:mr-56 rounded-full mb-6 lg:mb-2">Recursos</p>
                    <h1 className="text-3xl text-left md:text-6xl">Será útil para</h1>
                </div>
                <div className="text-left mb-4">
                    <p className="text-sm md:text-lg text-gray-500 font-bold mb-4 pr-0 lg:pr-48">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptates sunt possimus atque non excepturi maxime ex expedita tempora quaerat, animi et aspernatur blanditiis quas laboriosam praesentium iure corrupti id.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-lg"><strong className="bg-pink-700 p-1 rounded-full">01</strong> Titulares de contas pessoais</h1>
                    <h1 className="text-lg"><strong className="bg-pink-700 p-1 rounded-full">02</strong> Marketing empresarial</h1>
                    <h1 className="text-lg"><strong className="bg-pink-700 p-1 rounded-full">03</strong> Especialista em SMM</h1>
                </div>
            </div>
        </div>
    );
}
