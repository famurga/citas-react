import React from 'react'

const Header = () => {
  return (
    <div>
        {/* Media query:: md:w-2/3:::Apartir de 768px toma el 66% de la pantalla */}
      <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>Seguimiento pacientes  
          <span className='text-indigo-600'>Veterinaria</span>
          </h1>
    </div>
  )
}

export default Header
