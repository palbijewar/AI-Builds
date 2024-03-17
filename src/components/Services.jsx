import React from 'react';

export default function Services() {
  return (
    <div id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img src='/jslogo.png' alt="JavaScript" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/expresslogo.png' alt="Express" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/nodelogo.png' alt="Node.js" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/py.png' alt="Python" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/next.png' alt="Next.js" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/reactlogo.jpeg' alt="React" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/mongologo.png' alt="MongoDB" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/aws.png' alt="AWS" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/docker.png' alt="Docker" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/mysql.png' alt="MySQL" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/postsql.jpg' alt="PostgreSQL" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/typescript.png' alt="TypeScript" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/redis.png' alt="Redis" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/django.png' alt="Django" className="col-span-1 max-h-12 w-full object-contain" />
          <img src='/angular.png' alt="Angular" className="col-span-1 max-h-12 w-full object-contain" />
        </div>
        <p className="mt-20 text-center text-sm text-gray-600">
          In addition to these tools, we also utilize other technical stacks to deliver cutting-edge solutions as per the client's project requirements.
        </p>
      </div>
    </div>
  );
}
