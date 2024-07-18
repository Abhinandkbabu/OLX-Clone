import React from 'react'

const Menubar = ({setMenu}) => {
  return (
    <div className='flex shadow-sm h-10 p-2'>
       <h1 onClick={()=>setMenu("Shirt")} className='ml-48 cursor-pointer'>Shirts</h1>
       <h1 onClick={()=>setMenu("Jacket")} className='ml-5 cursor-pointer'>Jacket</h1>
       <h1 onClick={()=>setMenu("phones")} className='ml-5 cursor-pointer'>Mobile phones</h1>
       <h1 onClick={()=>setMenu("House")} className='ml-5 cursor-pointer'>House</h1>
       <h1 onClick={()=>setMenu("scooter")} className='ml-5 cursor-pointer'>Scooters</h1>
       <h1 onClick={()=>setMenu("bike")} className='ml-5 cursor-pointer'>Bike</h1>
       <h1 onClick={()=>setMenu("appartments")} className='ml-5 cursor-pointer'>Appartments</h1>
    </div>
  )
}

export default Menubar
