// Sobre.tsx
import Image from "next/image";
import user from '@/assets/user.webp'

export default function Sobre() {
    return (
        <div id="sobre" className="block h-full lg:h-screen flex flex-col items-center justify-center px-8 lg:px-40 bg-cover bg-center" style={{ backgroundImage: "url('/bg2.webp')" }}>
            <div className="text-center text-white mb-8 lg:mb-32 pt-0 lg:pt-16">
                <p className="bg-pink-700 mx-16 lg:mx-24 rounded-full mb-2">Sobre</p>
                <h1 className="text-lg md:text-2xl">Como nosso serviço funciona?</h1>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center px-8 lg:px-16 mb-32">
                <div className="relative w-full lg:w-1/3 flex items-center justify-center flex-col z-10 text-white">
                    <div className="bg-background p-6 text-left mb-4 rounded-xl shadow-xl">
                        <h1 className="text-xl mb-6"><strong className="text-purple-custom">1.</strong> Registrar e adicionar conta</h1>
                        <p className="text-sm text-gray-500 font-bold mb-4 pr-0 lg:pr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime vitae placeat praesentium sequi dolores ullam porro! Ipsam velit suscipit, ab ea accusamus rem doloremque, minus esse reprehenderit, quia optio.</p>
                    </div>
                    <div className="p-6 text-left mb-4 rounded-xl">
                        <h1 className="text-xl mb-6"><strong className="text-purple-custom">2.</strong> Criando tarefas</h1>
                        <p className="text-sm text-gray-500 font-bold mb-4 pr-0 lg:pr-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid a et suscipit aspernatur cum labore cupiditate ipsa odit! Maiores modi ipsa, suscipit nisi minima repellendus beatae doloremque similique perferendis veniam!</p>
                    </div>
                    <div className="p-6 text-left mb-4 rounded-xl">
                        <h1 className="text-xl mb-6"><strong className="text-purple-custom">3.</strong> obtenha o resultado!</h1>
                        <p className="text-sm text-gray-500 font-bold mb-4 pr-0 lg:pr-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ea magni temporibus nostrum laborum hic numquam? Excepturi earum dolor ut maxime sequi eveniet accusantium ad vel! Corrupti reiciendis ut assumenda!</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center ml-0 lg:ml-16">
                    <Image src={user} alt="Logo" width={700} height={32} />
                </div>
            </div>
        </div>
    );
}
