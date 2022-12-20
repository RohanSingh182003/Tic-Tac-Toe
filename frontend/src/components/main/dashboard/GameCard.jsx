import React from 'react'

const GameCard = () => {
  return (
    <div className='p-6 mb-6 border rounded-md shadow-xl w-full'>
        <p className="text-xl font-bold">Game With UserName</p>
        <p className="mt-4 text-gray-600">You won!</p>
        <p className="mt-4 text-gray-600">9th june 2022, 8pm</p>
        <button className="bg-yellow-500 p-3 mt-4 rounded-md w-full text-white">
        View game
      </button>
    </div>
  )
}

export default GameCard