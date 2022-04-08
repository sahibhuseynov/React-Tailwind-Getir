import React,{useState,useEffect} from 'react'
import catagoriesData from '../api/categories.json'
import Category from '../components/ui/Category.js'

const Catagories = () => {
const [catagories,setCatagories] = useState([])

useEffect(() => {

    setCatagories(catagoriesData)

},[])
  return (
    <div className='bg-white py-4'>
        <div className="container mx-auto">
            <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
            <div className='grid grid-cols-4 2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6'>
                {catagories && catagories.map((category,index) => <Category key={index} category={category}/>)}
                
            </div>
        </div>
    </div>
  )
}

export default Catagories