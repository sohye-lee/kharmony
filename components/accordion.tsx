import React, { useState } from 'react';
import { TbChevronLeft } from 'react-icons/tb';

interface data {
  header: string;
  title: string;
  description: string;
  type: string;
}

export default function Accordion(props: data) {
  const [open, setOpen] = useState(false);
  const header = props.header;
  const title = props.title;
  const description = props.description;
  const type = props.type;

  return (
    <div
      className={`w-full accordion-item mb-1 ${
        open ? 'border border-secondary' : ''
      }`}
    >
      <a className="w-full flex bg-slate-200 p-3 items-center justify-between">
        <div>
          <p
            className={`font-sans text-sm  ${
              type == 'general' ? 'text-secondary' : 'text-primary'
            }`}
          >
            {header}
          </p>
          <p className="font-sans text-xl mb-1">{title}</p>
        </div>
        <button onClick={() => setOpen(!open)}>
          <TbChevronLeft
            size={20}
            color="gray"
            className={` transition-all duration-350 ease ${
              open ? ' -rotate-90' : ''
            }`}
          />
        </button>
      </a>
      <div
        id="accordion1"
        className={`px-5 py-3 transition-all duration-350 ease bg-slate-50 ${
          open ? 'visible' : 'hidden'
        }`}
      >
        <p className="">{description}</p>
      </div>
    </div>
  );
}
