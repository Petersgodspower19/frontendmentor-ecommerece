import React from 'react'

function Links({children}) {
  return (
    <p className='text-[15px] links text-black cursor-pointer
     hover:border-b-orange'>
      {children}
    </p>
  )
}

export default Links
