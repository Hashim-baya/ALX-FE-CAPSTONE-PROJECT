import React from 'react'

const LogoImg = 'https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdmllJTIwYXBwJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'

function Logo() {
  return (
    <div>

         <img 
                src={LogoImg} 
                alt="Logo" 
                className='w-100 h-20 cursor-pointer'
        />

    </div>
  )
}

export default Logo