import React, { useState } from 'react';
import { TbChevronLeft } from 'react-icons/tb';

export default function Accordion(
  header: string,
  title: string,
  description: string
) {
  const [open, setOpen] = useState(false);

  
  return (
    <div className="w-full p-1 accordion-item ">
      <a className="w-full flex bg-slate-200 p-3 items-center justify-between">
        <div>
          <p className="font-sans text-sm text-secondary ">{header}</p>
          <p className="font-sans text-xl mb-1">{title}</p>
        </div>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#accordion1"
          aria-expanded="false"
          aria-controls="accordion1"
        >
          <TbChevronLeft size={20} color="gray" />
        </button>
      </a>
      <div id="accordion1" className=" ">
        <p className="">{description}</p>
      </div>
    </div>
  );
}
