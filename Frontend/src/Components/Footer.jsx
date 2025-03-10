import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="font-[roboto] flex flex-col items-center bg-[#1B1919] text-white p-6 pt-2 mx-[35px] mt-[60px] rounded-3xl space-y-3 font-roboto">
    <h1 className="mb-1 text-2xl font-bold">
      Ready to Start Earning?
    </h1>

    <h6 className="text-[15px] text-center mt-2 ">
        Sahre your referral link today and watch your rewards grow!
    </h6>

    <input
      className="p-2 pl-10  rounded-4xl bg-white text-black font-bold w-[270px] "
      type="text"
      placeholder="Get Your Referral Link"
    />
  </div>

    </>
  )
}

export default Footer