import React from 'react';
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <div className='relative'>
<footer className="bg-[#06091A] text-white mt-56  p-10 pt-48 flex flex-col justify-center items-center gap-6">
<div><img src={logo} alt="" /></div>
  <div className='footer'>
  <nav>
    <h6 className="footer-title">About Us</h6>
    <p className='text-gray-500'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover text-gray-500">Home</a>
    <a className="link link-hover text-gray-500">services</a>
    <a className="link link-hover text-gray-500">about</a>
    <a className="link link-hover text-gray-500">contact</a>
  </nav>
  
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <p>Subscribe to our newsletter for the <br />latest updates.</p>
    <fieldset className="form-control w-80">
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn bg-gradient-to-r from-[#d579ad] to-[#fac859] join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  </div>
</footer>
<footer className="footer footer-center bg-[#06091A] text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>

<div className='absolute -top-1/2 translate-y-1/4 left-1/2 -translate-x-1/2'>
<div className='flex flex-col space-y-4 justify-center items-center w-[1272px] bg-gradient-to-r from-[#c3ecf8] to-[#fadea1] py-[88px] rounded-xl mx-auto'>
<h3 className='text-4xl font-bold'>Subscribe to our Newsletter</h3>
<p className='font-bold text-gray-700'>Get the latest updates and news right in your inbox!</p>
<form className='flex items-center gap-2'>

<input
type="text"
placeholder="username@site.com"
className="input input-bordered bg-transparent placeholder:text-gray-700" />
<button className="btn font-bold border-none outline-none bg-gradient-to-r from-[#d579ad] to-[#fac859]">Subscribe</button>
</form>
</div>
</div>
    </div>
  )
}
