import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewslatterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]'  src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to Forever, where fashion meets quality and individuality. Our mission is to bring you a curated selection of stylish, high-quality clothing that lets you express your unique personality. We believe that clothing is more than just fabric—it's a statement, a way of life, and a form of self-expression.</p>
              <p>At Forever, we carefully design and select every piece, ensuring it meets our standards of craftsmanship, comfort, and style. From casual wear to special occasions, we offer a range of collections that keep you looking fresh and feeling confident.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at Forever is to empower self-expression through high-quality, stylish clothing that resonates with individuality. We are committed to creating a fashion experience that combines comfort, elegance, and ethical practices. Shop confidently, knowing each piece reflects our values and dedication to style and responsibility.</p>
        
        </div>

      </div>
      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure each garment meets high standards of durability and craftsmanship. Our commitment to quality means every piece is made to last, offering confidence in every wear.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'> we prioritize convenience in every shopping experience. From seamless browsing to fast delivery, we’re here to make fashion accessible and hassle-free</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our commitment to exceptional customer service means we’re here for you at every step. From personalized assistance to quick, responsive support, your satisfaction is our top priority at Forever.</p>
        </div>

      </div>
      <NewslatterBox/>
        
    </div>
  )
}

export default About