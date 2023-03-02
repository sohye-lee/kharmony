import Link from 'next/link';
import React from 'react';
import Bar from './bar';

export default function Events() {
  return (
    <div
      className="section-content flex flex-col items-center px-4"
      id="events"
    >
      <h2 className="font-serif font-bold italic text-4xl">Our Next Events</h2>
      <Bar />
      {/* <div className="bg-gradient-to-r from-secondary to-primary h-1 w-20 mt-3 mb-5"></div> */}
      <div className="px-4">
        <div className="flex items-center border-b py-3 w-full border-slate-200">
          <div className="pr-3">
            <p className="font-sans font-bold text-2xl text-center w-32">
              03.25.2023
            </p>
            <p className="font-sans font-semibold text-md text-center">
              3:00 PM (Sat)
            </p>
          </div>
          <div className="btn-divider"></div>
          <div className="pl-3">
            <p className="font-sans text-xl mb-1">K-Harmony show</p>
            <p className="font-sans text-sm ">
              Arden Courts A promedica Memory Care Community
            </p>
          </div>
        </div>

        <div className="flex items-center border-b py-3 w-full border-slate-200">
          <div className="pr-3">
            <p className="font-sans font-bold text-2xl text-center w-32">
              05.06.2023
            </p>
            {/* <p className="font-sans font-semibold text-md text-center">
              1:30 PM (Sun)
            </p> */}
          </div>
          <div className="btn-divider"></div>
          <div className="pl-3">
            <p className="font-sans text-xl mb-1">Culmore Community Day</p>
            <p className="font-sans text-sm ">Woodrow Wilson Library</p>
          </div>
        </div>

        <div className="flex items-center border-b py-3 w-full border-slate-200">
          <div className="pr-3">
            <p className="font-sans font-bold text-2xl text-center w-32">
              07.02.2023
            </p>
            {/* <p className="font-sans font-semibold text-md text-center">
              1:30 PM (Sun)
            </p> */}
          </div>
          <div className="btn-divider"></div>
          <div className="pl-3">
            <p className="font-sans text-xl mb-1">K-Harmony Show</p>
            <p className="font-sans text-sm ">George Mason Library</p>
          </div>
        </div>
      </div>
      <div className="btn btn-black mt-8 px-5">
        <Link href="#" className="hover:text-primary-light">
          See Calendar
        </Link>
        <div className="btn-divider"></div>
        <Link href="#" className="hover:text-primary-light">
          Invite K-Harmony
        </Link>
      </div>
    </div>
  );
}
