import React from 'react'
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from '../components/NewsLetter';


const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={' US'} />
      </div>
      
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>800 Puloly North West <br />Jaffna, Sri Lanka.</p>
          <p className='text-gray-500'>Tel: =94 757575158 <br />Email: ogalingam.nithurzan@gmail.com</p>
          <p className='font-semibold text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact
