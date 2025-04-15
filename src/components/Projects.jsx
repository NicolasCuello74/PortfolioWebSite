import React from 'react'

function Projects() {
  return (
    <section id='Projects' className='h-[944px] lg:grid grid-cols-3 gap-4 p-4'>
      <div className='col-span-3 flex items-center justify-center'>
        <h1>MIS PROYECTOS</h1>
      </div>
      <div className='max-h-96 items-center justify-center rounded-3xl border-2 border-gray-300 shadow-lg p-2'>
        <div className='flex-col'>
          <h2>Title</h2>
          <img src="" alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo eum nihil voluptates culpa earum, consequatur cupiditate asperiores omnis dignissimos possimus, rerum optio voluptatibus iure accusamus laborum, id molestias neque.</p>
        </div>
      </div>
      <div className='max-h-96 items-center justify-center rounded-3xl border-2 border-gray-300 shadow-lg p-2'>
        <h2>Title</h2>
        <img src="" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo eum nihil voluptates culpa earum, consequatur cupiditate asperiores omnis dignissimos possimus, rerum optio voluptatibus iure accusamus laborum, id molestias neque.</p>
      </div>
      <div className='max-h-96 items-center justify-center rounded-3xl border-2 border-gray-300 shadow-lg p-2'>
        <h2>Title</h2>
        <img src="" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere explicabo eum nihil voluptates culpa earum, consequatur cupiditate asperiores omnis dignissimos possimus, rerum optio voluptatibus iure accusamus laborum, id molestias neque.</p>
      </div>
    </section>
  )
}

export default Projects