import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 px-9 pt-3 pb-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 '>
        <Image
          alt={author.name}
          unoptimized
          layout='fill'
          objectFit='contain'
          className='align-middle rounded-full'
          src={author.photo.url}
        />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author