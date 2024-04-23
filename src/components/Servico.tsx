// Servico.tsx

export default function Servico() {
    return (
      <div
        id="servico"
        className="block h-screen flex flex-col items-center justify-center px-8 lg:px-56 lg:pt-0 pt-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg3.png')" }}
      >
        <div className="text-center text-white mb-16">
          <p className="bg-pink-700 mx-24 rounded-full mb-2">Serviços</p>
          <h1 className="text-lg md:text-2xl">Como nosso serviço funciona?</h1>
        </div>
        <div className="relative gap-12 flex flex-row items-center justify-center z-10 text-white text-center w-full">
          <div className="w-1/3">
            {/* Card Simples */}
            <div className="bg-gray-custom p-8 rounded-lg">
              <h2 className="text-4xl font-bold text-white mb-4">Simples</h2>
              <ul className="text-center text-2xl text-gray-300">
                <li className="p-2">Limited</li>
                <li className="p-2">3 Tasks</li>
                <li className="p-2">4 Groups</li>
                <li className="p-2">24/7</li>
                <li className="text-purple-custom">R$24,99</li>
              </ul>
            </div>
          </div>
          <div className="w-1/3">
            {/* Card Básico */}
            <div className="bg-gray-custom p-8 rounded-lg">
              <h2 className="text-4xl font-bold text-white mb-4">Básico</h2>
              <ul className="text-center text-2xl text-gray-300">
                <li className="p-2">Unlimited</li>
                <li className="p-2">5 Tasks</li>
                <li className="p-2">10 Groups</li>
                <li className="p-2">24/7</li>
                <li className="text-purple-custom">R$54,99</li>
              </ul>
            </div>
          </div>
          <div className="w-1/3">
            {/* Card Pro */}
            <div className="bg-gray-custom p-8 rounded-lg">
              <h2 className="text-4xl font-bold text-white mb-4">Pro+</h2>
              <ul className="text-center text-2xl text-gray-300">
                <li className="p-2">Unlimited</li>
                <li className="p-2">10 Tasks</li>
                <li className="p-2">15 Groups</li>
                <li className="p-2">24/7</li>
                <li className="text-purple-custom">R$84,99</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  