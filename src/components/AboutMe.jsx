import React from 'react'
import imgUrl from '../assets/perfil2.jpg'

const AboutMe = () => {
  return (
    <>
      <section className='inline-block md:flex p-2'>
        <div className=''>
          <img className='h-[400px] w-full md:h-4/6 object-contain rounded-lg p-10' src={imgUrl} alt="perfil" />
        </div>
        <div className='pt-10 pr-4'>
          <h2 className='text-justify text-sm'>
            Sobre mi:
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iste rerum pariatur, odit sequi neque dolorem perspiciatis dolorum vel, fugiat id illum, similique suscipit. Reprehenderit alias aliquid quasi fugit distinctio!
          </h2>
        </div>
      </section>
    </>
  )
}

export default AboutMe