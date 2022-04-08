import React,{useState,useEffect} from 'react'
import cardsData from '../api/cards.json'

const Cards = () => {
    const[cards,setCards] = useState([])

useEffect(() => {
setCards(cardsData)
},[])

  return (
    <div className='grid grid-cols-3 gap-x-4 container mx-auto mt-14 '>
        {cards.length && cards.map(card => (
            <div className='bg-white p-14 flex flex-col items-center text-center  justify-center rounded-lg shadow-sm'>
                <img className='mb-6' src={card.image} alt="" />
                <h6 className='font-semibold text-primary-brand-color text-lg '>{card.title}</h6>
                <p className='mt-2 text-sm text-gray-500'>{card.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Cards