import React, { useState } from 'react';

function RightContent() {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [network, setNetwork] = useState('');

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto text-white flex flex-col h-full">
      <h1 className='text-xl font-bold mb-4'>
        Enter the victim address and amount you want to send
      </h1>
      <form className="space-y-4 flex-grow">
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="walletAddress">
            Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter victim's wallet address"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="amount">
            Amount (USD)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="network">
            USDT Network
          </label>
          <select
            id="network"
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select Network</option>
            <option value="TRC20">TRC20</option>
            <option value="ERC20">ERC20</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Create a Transaction
        </button>
      </form>
      <div className="bg-gray-600 p-11 rounded-md mt-4 text-center">
        <p className="text-white font-bold">No information yet</p>
      </div>
    </div>
  );
}

export default RightContent;
