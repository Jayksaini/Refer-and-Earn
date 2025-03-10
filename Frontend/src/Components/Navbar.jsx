import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-black font-[roboto] text-white p-4 pt-8">
        <div>
          <h1 className="font-bold text-2xl text-[rgba(248, 242, 242, 1)] ">
            ReferRewards
          </h1>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">My Referrals</a>
            </li>
            <li>
              <a href="">
                <img src="" alt="profile" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
