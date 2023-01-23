import Link from 'next/link';
import React from 'react';
import Bar from './bar';
import { TbChevronLeft } from 'react-icons/tb';
import Accordion from './accordion';

export default function Notice() {
  return (
    <div className="section-content flex flex-col items-center">
      <h2 className="font-serif font-bold italic text-4xl">Notice</h2>
      <Bar />
      <div className="w-96 max-w-lg ">
        <Accordion
          header="General"
          title="We meet every Saturday"
          description="We meet every Saturday"
          type="general"
        />
        <Accordion
          header="General"
          title="Bring these to our practice!"
          description="Bring these to our practice!"
          type="general"
        />
        <Accordion
          header="11.16.2022"
          title="Practice at 3pm this week"
          description="Practice at 3pm this week"
          type="date"
        />
        <Accordion
          header="11.5.2022"
          title="Snack sign-up here"
          description="Snack sign-up here"
          type="date"
        />
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
