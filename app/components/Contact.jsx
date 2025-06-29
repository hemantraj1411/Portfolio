import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState } from 'react' 

const Contact =  ({isDarkMode}) => {


 const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6b04a108-0417-40b7-a303-411541e852c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
<div
  id="Contact"
  className={`w-full px-[12%] py-10 scroll-mt-20 
    bg-no-repeat bg-center bg-[length:90%_auto] 
    ${isDarkMode ? '' : 'bg-[url("/footer-bg-color.png")]'}`}
>
  <h4 className="text-center mb-2 text-lg font-Ovo">
            Connect with me</h4>
            <h2 className='text-center text-5e xl font-Ovo'>
              Get in touch
            </h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
             I'd love to hear from you! If you have any questions, comments, or feedback,
             please use the form below.
            </p>

            
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      required
      className="w-full p-3 border border-gray-400 rounded-md 
                 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white
                 outline-none focus:ring-2 focus:ring-purple-400 transition"
    />
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
      className="w-full p-3 border border-gray-400 rounded-md 
                 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white
                 outline-none focus:ring-2 focus:ring-purple-400 transition"
    />
  </div>

  <textarea
    name="message"
    rows="6"
    placeholder="Enter your message"
    required
    className="w-full p-3 border border-gray-400 rounded-md bg-white dark:bg-[#1a1a1a] 
               text-gray-900 dark:text-white mb-6 outline-none 
               focus:ring-2 focus:ring-purple-400 transition"
  ></textarea>

  <button
    type="submit"
    className="py-3 px-8 w-max flex items-center justify-between gap-2 
               bg-black/80 text-white rounded-full mx-auto 
               hover:bg-black duration-500 dark:bg-purple-700 
               dark:hover:bg-purple-800"
  >
    Submit now
    <Image src={assets.right_arrow_white} alt="" className="w-4" />
  </button>

  <p className="mt-4 text-center text-sm dark:text-white text-gray-700">{result}</p>
</form>

    </div>
  )
}

export default Contact 