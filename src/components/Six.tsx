// Six.tsx
import Image from "next/image";
import banner from '@/assets/banner.png'

export default function Six() {
    return (
        <div id="six" className="block h-screen flex flex-col items-center justify-center px-8 lg:px-56 lg:pt-0 pt-12 bg-cover bg-center" style={{backgroundImage: "url('/bg3.png')"}}>
                        <div className="text-center text-white mb-32">
                <p className="bg-pink-700 mx-24 rounded-full mb-2">Work</p>
                <h1 className="text-lg md:text-2xl">Como nosso serviço funciona?</h1>
            </div>
            <div className="relative flex flex-row items-center justify-center gap-4 z-10 text-white text-center w-full">
                <div className="text-left">
                    <h2 className="p-2">Benefices</h2>
                    <h2 className="bg-gray-custom p-2">Number of acount</h2>
                    <h2 className="p-2">Number of tasks</h2>
                    <h2 className="bg-gray-custom p-2">Connected groups</h2>
                    <h2 className="p-2">Support</h2>
                    <h2 className="bg-gray-custom p-2">Price</h2>
                </div>
                <div className="text-center">
                    <h2 className="p-2">Simple</h2>
                    <h2 className="bg-gray-custom p-2">Limited</h2>
                    <h2 className="p-2">3 Tasks</h2>
                    <h2 className="bg-gray-custom p-2">Connected 4 groups</h2>
                    <h2 className="p-2">24/7</h2>
                    <h2 className="bg-gray-custom p-2">R$29.99</h2>
                </div>
                <div className="text-center">
                    <h2 className="p-2">Basic</h2>
                    <h2 className="bg-gray-custom p-2">Unlimited</h2>
                    <h2 className="p-2">5 Tasks</h2>
                    <h2 className="bg-gray-custom p-2">Connected 8 groups</h2>
                    <h2 className="p-2">24/7</h2>
                    <h2 className="bg-gray-custom p-2">R$49.00</h2>
                </div>
                <div className="text-center">
                    <h2 className="p-2">Pro+</h2>
                    <h2 className="bg-gray-custom p-2">Unlimited</h2>
                    <h2 className="p-2">10 Tasks</h2>
                    <h2 className="bg-gray-custom p-2">Connected 12 groups</h2>
                    <h2 className="p-2">24/7</h2>
                    <h2 className="bg-gray-custom p-2">R$69.99</h2>
                </div>
            </div>
        </div>
    );
}
