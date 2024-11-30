import { IoIosSearch } from "react-icons/io";
import React from "react";

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center text-center bg-gray-100 py-28 px-6">
    <div
      className="w-[800px] h-[300px] md:w-[1300px] md:h-[800px] rounded-xl"
      style={{
        backgroundImage: `url("/hero.jpg")`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#00000080] w-full h-full flex flex-col justify-end pb-40 items-center gap-5">
        <h1 className="md:text-4xl text-2xl font-bold text-blackText">
          Welcome to DookanPe
        </h1>
        <p className="text-white mb-10 text-end">
          A commerce platform connecting small to medium shops with their raw
          materials.
        </p>
        <div className="flex justify-between items-center text-base md:text-xl rounded-lg border border-gray-300 bg-white">
          <IoIosSearch size={30} className="text-gray-500 md:text-xl mx-4" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-1/2 md:w-fit outline-none text-black"
          />
          <button className="p-2 md:p-4 md:px-6 text-white rounded-lg font-semibold bg-gradient-to-r from-blue-800 to-green-600 hover:from-blue-800 hover:to-green-600 hover:bg-gradient-to-br transition ease-in">
            Register interest
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
