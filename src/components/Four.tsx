// Four.tsx
import Image from "next/image";
import user from '@/assets/user.png'

export default function Four() {
    return (
        <div id="four" className="block h-screen flex flex-col items-center justify-center px-8 lg:px-16 lg:pt-0 pt-12 bg-cover bg-center" style={{ backgroundImage: "url('/bg2.png')" }}>
            <div className="text-center text-white mb-4">
                <p className="bg-pink-700 mx-24 rounded-full mb-2">Work</p>
                <h1 className="text-lg md:text-2xl">O serviço será atualizado em:</h1>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center px-8 lg:px-16 mb-32">
                <div className="text-center text-white mb-4">
                    <p className="text-sm text-gray-custom font-bold mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ea magni temporibus nostrum laborum hic numquam? Excepturi earum dolor ut maxime sequi eveniet accusantium ad vel! Corrupti reiciendis ut assumenda!</p>
                </div>
            </div>
        </div>
    );
}
