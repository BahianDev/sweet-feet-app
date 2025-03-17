"use client";
import { ConnectWallet } from "@/components/ConnectWallet";
import { useState } from "react";

const ALLOWLIST = [
  "0xC01Fb4f6B41F33c4f6A096B061c5e1E9ad810Bd1",
];

const normalizedAllowlist = ALLOWLIST.map((address) => address.trim().toLowerCase());

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckEligibility = () => {
    // Normaliza o endereço digitado para minúsculas
    const normalizedAddress = walletAddress.trim().toLowerCase();

    if (normalizedAllowlist.includes(normalizedAddress)) {
      setMessage("Sweet, you're in!");
    } else {
      setMessage("You're out of sugar! Get some on our Discord.");
    }
  };

  return (
    <div className="relative min-h-screen bg-[url('/bg.png')] bg-cover bg-center p-4">
      {/* Barra de navegação */}
      <nav className="flex justify-between mb-8">
        <img src="/logo.png" alt="logo" className="w-16 h-16 md:w-28 md:h-28 rounded-full" />
        <ConnectWallet />
      </nav>

      {/* Conteúdo central (card) */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white bg-opacity-90 rounded-lg max-w-lg w-full text-center shadow-md">
          <div className="bg-[#EDEAFD] py-4 px-8 border-b-2 border-[#B794F2]">
            <h1 className="text-2xl font-bold mb-4 text-[#B794F2]">
              Check Your Eligibility
            </h1>
            <p className="text-[#B794F2] mb-6">
              Enter your wallet address to check if you&lsquo;re eligible
            </p>
          </div>
          <div className="p-8">
            <input
              type="text"
              placeholder="Enter wallet address (0x...)"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-2 text-gray-700 border border-gray-300 rounded-md mb-4"
            />

            <button
              onClick={handleCheckEligibility}
              className="w-full py-2 px-4 bg-[#B794F2] text-white rounded-md font-bold hover:bg-purple-700 transition-colors"
            >
              Check Eligibility
            </button>

            {/* Div para exibir a mensagem */}
            {message && (
              <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md text-gray-800">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer fixo no canto inferior direito */}
      <footer className="fixed bottom-4 right-4 flex space-x-3">
        {/* Ícone do Twitter */}
        <a
          href="https://x.com/sweetfeetnfts"
          className="bg-[#EFE2C2] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Twitter"
          target="_blank"
        >
          <img src="/twitter-icon.png" alt="Twitter" className="w-5 h-5" />
        </a>

        {/* Ícone do Discord */}
        <a
          href="#"
          className="bg-[#EFE2C2] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          aria-label="Discord"
        >
          <img src="/discord-icon.png" alt="Discord" className="w-5 h-5" />
        </a>
      </footer>
    </div>
  );
}
