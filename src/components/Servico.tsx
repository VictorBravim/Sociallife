// Servico.tsx

export default function Servico() {
  return (
    <div
      id="servico"
      className="block h-screen flex flex-col items-center justify-center px-8 lg:px-56 lg:pt-0 pt-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg3.png')" }}>
      <div className="text-center text-white mb-16">
        <p className="bg-pink-700 mx-24 rounded-full mb-2">Serviços</p>
        <h1 className="text-lg md:text-2xl">Como nosso serviço funciona?</h1>
      </div>
      <div className="relative gap-12 flex flex-row items-center justify-center z-10 text-white text-center w-full">
        <div className="w-1/3">
          <div className="bg-gray-custom p-8 rounded-lg">
            <h1 className="text-xl font-bold text-white mb-4">SIMPLES</h1>
            <h2 className="text-5xl font-bold text-purple-custom mb-4">R$24,99</h2>
            <button className="border border-purple-custom p-2 px-10">Comprar</button>
            <div className="border-b border-gray-600 mt-6 mb-4"></div>
            <ul className="text-center text-xl text-gray-300">
              <li className="p-2">✔ Acesso Limitado</li>
              <li className="p-2">✔ 3 Tasks disponiveis</li>
              <li className="p-2">✔ 4 Groups disponiveis</li>
              <li className="p-2">✔ Suporte 24/7</li>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-gray-custom p-8 rounded-lg">
            <h1 className="text-xl font-bold text-white mb-4">BASICO</h1>
            <h2 className="text-5xl font-bold text-purple-custom mb-4">R$54,99</h2>
            <button className="border border-purple-custom p-2 px-10">Comprar</button>
            <div className="border-b border-gray-600 mt-6 mb-4"></div>
            <ul className="text-center text-xl text-gray-300">
              <li className="p-2">✔ Acesso Ilimitado</li>
              <li className="p-2">✔ 7 Tasks disponiveis</li>
              <li className="p-2">✔ 10 Groups disponiveis</li>
              <li className="p-2">✔ Suporte 24/7</li>
            </ul>
          </div>
        </div>
        <div className="w-1/3">
          <div className="bg-gray-custom p-8 rounded-lg">
            <h1 className="text-xl font-bold text-white mb-4">PRO+</h1>
            <h2 className="text-5xl font-bold text-purple-custom mb-4">R$84,99</h2>
            <button className="border border-purple-custom p-2 px-10">Comprar</button>
            <div className="border-b border-gray-600 mt-6 mb-4"></div>
            <ul className="text-center text-xl text-gray-300">
              <li className="p-2">✔ Acesso Ilimitado</li>
              <li className="p-2">✔ 10 Tasks disponiveis</li>
              <li className="p-2">✔ 15 Groups disponiveis</li>
              <li className="p-2">✔ Suporte 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
