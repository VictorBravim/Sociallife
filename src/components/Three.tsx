// Three.tsx
import Image from "next/image";

export default function Three() {
    return (
        <div id="home" className="block h-screen flex flex-col items-center justify-center px-8 lg:px-16 bg-cover bg-center" style={{ backgroundImage: "url('/bg2.png')" }}>
            <div className="text-center text-white mb-32">
                <p className="bg-pink-700 mx-24 rounded-full mb-2">Work</p>
                <h1 className="text-lg md:text-2xl">Como nosso serviço funciona?</h1>
            </div>
            <div className="w-full flex flex-row px-8 lg:px-16 mb-32">
                <div className="relative flex flex-col z-10 text-white w-full lg:w-1/3">
                    <div className="text-left mb-4">
                        <h1 className="text-xl mb-6"><strong>1</strong> Registrar e adicionar conta</h1>
                        <p className="text-sm text-gray-custom font-bold mb-4 pr-0 lg:pr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime vitae placeat praesentium sequi dolores ullam porro! Ipsam velit suscipit, ab ea accusamus rem doloremque, minus esse reprehenderit, quia optio.</p>
                    </div>
                    <div className="text-left mb-4">
                        <h1 className="text-xl mb-6"><strong>2</strong> Criando tarefas</h1>
                        <p className="text-sm text-gray-custom font-bold mb-4 pr-0 lg:pr-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid a et suscipit aspernatur cum labore cupiditate ipsa odit! Maiores modi ipsa, suscipit nisi minima repellendus beatae doloremque similique perferendis veniam!</p>
                    </div>
                    <div className="text-left mb-4">
                        <h1 className="text-xl mb-6"><strong>3</strong> obtenha o resultado!</h1>
                        <p className="text-sm text-gray-custom font-bold mb-4 pr-0 lg:pr-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ea magni temporibus nostrum laborum hic numquam? Excepturi earum dolor ut maxime sequi eveniet accusantium ad vel! Corrupti reiciendis ut assumenda!</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                </div>
            </div>
        </div>
    );
}
