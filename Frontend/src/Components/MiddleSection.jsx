import React from "react";

const MiddleSection = () => {
  return (
    <>
   
  <div className="font-[roboto] flex flex-col items-center bg-[#1B1919] text-white p-6 pt-2 mx-[35px] mt-[60px] rounded-3xl space-y-3 font-roboto">
    <h1 className="mb-1 text-2xl font-bold">
      Invite friends & Earn Rewards
    </h1>

    <h6 className="text-[15px] font-bold text-center ">
      Share your referral link with friends and earn exciting rewards when they join
    </h6>

    <input
      className="p-2 rounded-xl bg-[#373131] text-white w-2xl"
      type="text"
      placeholder=""
    />

    <input
      className="p-2 rounded-2xl bg-white text-black w-[300px] mt-3"
      type="text"
      placeholder="Track Your Referrals"
    />
  </div>

  <div className="font-[roboto] flex flex-col items-center mt-[60px] font-bold text-3xl">
    <p>Why Refer Friends?</p>
  </div>
</>

  
  );
};

export default MiddleSection;
