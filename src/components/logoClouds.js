import Image from "next/image";
import React from "react";

const LogoCloud = () => {
  const logos = [
    {
      src: "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg",
      alt: "Tuple",
    },
    {
      src: "https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg",
      alt: "Mirage",
    },
    {
      src: "https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg",
      alt: "StaticKit",
    },
    {
      src: "https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg",
      alt: "Transistor",
    },
    {
      src: "https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg",
      alt: "Workcation",
    },
  ];

  return (
    <div className="bg-indigo-600 rounded overflow-hidden p-6 m-4">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          The worlds most innovative companies use SiteGenie
        </h2>
        <div className="mt-8 lg:mt-10 flex flex-wrap justify-between">
          {logos.map((logo, index) => (
            <div key={index} className="mt-4 ml-8 flex-shrink-0">
              <Image src={logo.src} alt={logo.alt} width={144} height={48} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
