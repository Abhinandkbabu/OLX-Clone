import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({products,search,menu}) => {
   
  return ( 
    <div className='grid grid-cols-4 p-5'>
      {products.filter((item)=> item?.title?.includes(search ? search : menu)).map((data,index)=>{
    return <Link to={"/details"} state={{data:data}} key={index}>
    <div className='border border-spacing-1 p-2 ml-3 mt-3'>
        <img src={data?.image} className='w-60 h-48' />
        <h1 className='font-bold text-xl'>₹{data?.price}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.category}</h1>
      </div>
    </Link> 
        
})}
    </div>
  )
}

export default Home
