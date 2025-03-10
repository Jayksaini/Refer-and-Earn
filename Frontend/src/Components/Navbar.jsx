import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-black font-[roboto] text-white p-4 pt-8">
        <div>
          <h1 className="font-bold text-2xl">ReferRewards</h1>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="">Home</a></li>
            <li><a href="">My referrals</a></li>
            <li><a href=""><img src="" alt="profile" /></a></li>
          </ul>
       
      </nav>
    </>
  );
};

export default Navbar;
