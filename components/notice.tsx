import Link from 'next/link';
import React from 'react';
import Bar from './bar';
import { TbChevronLeft } from 'react-icons/tb';

export default function Notice() {
  return (
    <div className="section-content flex flex-col items-center">
      <h2 className="font-serif font-bold italic text-4xl">Notice</h2>
      <Bar />
      {/* <div className="bg-gradient-to-r from-secondary to-primary h-1 w-20 mt-3 mb-5"></div> */}
      <div className="w-96 max-w-lg group">
        <div className="w-full p-1 accordion-item ">
          <a className="w-full flex bg-slate-200 p-3 items-center justify-between">
            <div>
              <p className="font-sans text-sm text-secondary ">General</p>
              <p className="font-sans text-xl mb-1">
                Weekly Training / Rehearsal
              </p>
            </div>
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordion1"
              aria-expanded="false"
              aria-controls="accordion1"
            >
              <input type="checkbox" className="opacity-0" />
              <TbChevronLeft size={20} color="gray" />
            </button>
          </a>
          <div
            id="accordion1"
            className="d-none group-hover:bg-black group-active:block"
          >
            <p className="">1111</p>
          </div>
        </div>
      </div>

      <div className="btn btn-black mt-8 px-5">
        <Link href="#" className="hover:text-primary-light">
          Read More
        </Link>
        <div className="btn-divider"></div>
        <Link href="#" className="hover:text-primary-light">
          Ask Questions
        </Link>
      </div>
    </div>
  );
}
