import React from "react";
import {Navbar} from '../Navbar/Navbar';
import bgBlob from '../../icons/blob.svg';

export const  Landing = () =>  {
  return (
    <div className="bg-gray-200 h-screen max-h-screen w-full flex flex-wrap">
      <div className="w-full p-4 sm:px-12 pt-10 pb-0">
        <Navbar />
      </div>
      <div className=" w-full flex justify-between inset-0">
        <div className="p-4 m-auto sm:mx-0 sm:pl-20 sm:w-1/2 w-full">
          <div className="text-3xl font-black">
            Meetings should be Meetings with
          </div>
          <div className="text-3xl font-black">Meet.in</div>
          <div className='w-full text-lg text-justify'>
            It's now easier than ever to personalize your video meeting
            experience.
          </div>
          <div className="flex justify-between w-1/2 my-6">
            <div className="bg-blue-600 rounded-lg text-white font-bold px-3 py-2">
              Host Meeting
            </div>
            <div className="bg-white rounded-lg text-dark font-bold px-3 py-2">
              Join Meeting
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full hidden sm:inline">
          <img
            className="inset-0 "
            height={700}
            width={700}
            alt="blob"
            src={bgBlob}
          />
        </div>
      </div>
    </div>
  );
}
