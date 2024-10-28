import React from 'react'
import bannerImage from '../assets/images/banner-main.png';
import bannerBg from '../assets/images/bg-shadow.png';

export default function Banner({setClemCoin}) {
  return (
    <div>
<div
style={{ backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.6)),url(${bannerBg})` }} 
className="bg-cover bg-center flex justify-center items-center gap-4 flex-col py-16 rounded-2xl mt-8">
<div><img src={bannerImage} alt="" /></div>
<h2 className='text-5xl font-semibold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
<p className='text-gray-700'>Beyond Boundaries Beyond Limits</p>
<div className='border border-[#E7FE29] p-2 rounded-xl'>
<button 
onClick={()=>setClemCoin(3000)}
className='btn bg-[#E7FE29] font-bold hover:bg-[#E7FE29] rounded-xl'>Claim Free Credit</button>
</div>
</div>
    </div>
  )
}
