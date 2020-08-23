import React from "react";
import {Navbar} from '../Navbar/Navbar';

export const  Landing = () =>  {
  return (
    <div className="bg-gray-200 h-screen max-h-screen w-full flex p-4 sm:p-10">
      <div className="w-full"><Navbar/></div>
    </div>
  );
}
