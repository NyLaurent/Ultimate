import React from 'react';
import logo from './logo.png';

interface GreyBoxProps {
  title: string;
  amount: string;
}

function GreyBox({ title, amount }: GreyBoxProps) {
  return (
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg max-w-md mx-auto flex justify-between items-center shadow-md">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-xl font-bold">{amount}</p>
    </div>
  );
}

function LeftContent() {
  return (
    <div>
      <h1 className="font-extrabold text-2xl pb-2">
        UFlash <span className="text-primary">Ultimate</span>
      </h1>
      <section className="bg-gray-100 pt-2 p-2 rounded-lg mb-4">
        <p className="text-xs text-gray-500">Latest Fake Transactions</p>
        <p className="text-sm font-semibold text-gray-700">
          USDT Amount: 8459 | Address: TR7F3hH3QDpK...
        </p>
      </section>
      <div className="bg-blue text-white p-5 rounded-lg max-w-md mx-auto flex flex-col items-center space-y-6 shadow-lg">
        <p className="text-green-600 font-bold mb-2">
          <span className="text-white">Privacy protection:</span> AES-256 Encryption
        </p>
        <div className="flex space-x-4">
          <img src={logo} alt="Placeholder" className="w-20 h-20 rounded-full" />
          <p className="text-sm font-bold">Cancel the</p>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition">
          Cancel Transaction
        </button>
      </div>
      <div className="space-y-4 mt-4">
        <GreyBox title="Balance (Daily)" amount="$3434343" />
        <GreyBox title="Transactions" amount="0" />
      </div>
    </div>
  );
}

export default LeftContent;
