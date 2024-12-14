/* eslint-disable @next/next/no-img-element */
import React from "react";

const Partners = () => {
  const items = [
    { id: 1, src: "/websiteImages/apollo.png", alt: "Apollo" },
    { id: 2, src: "/websiteImages/partner-1.png", alt: "part" },
    { id: 3, src: "/websiteImages/apollo.png", alt: "Apollo" },
    { id: 4, src: "/websiteImages/partner-1.png", alt: "part" },
    { id: 5, src: "/websiteImages/apollo.png", alt: "Apollo" },
    { id: 6, src: "/websiteImages/partner-1.png", alt: "part" },
    { id: 7, src: "/websiteImages/apollo.png", alt: "Apollo" },
    { id: 8, src: "/websiteImages/partner-1.png", alt: "part" },
    { id: 9, src: "/websiteImages/apollo.png", alt: "Apollo" },
    { id: 10, src: "/websiteImages/partner-1.png", alt: "part" },
  ];

  const doubledItems = [];
  for (let i = 0; i < items.length * 100; i++) {
    doubledItems.push(items[i % items.length]);
  }

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
        {doubledItems.map((item) => (
          <li key={item.id} className="mx-5">
            <div style={{ width: "100px" }}>
              <img
                src={item.src}
                className="w-full max-sm:w-[80px] "
                alt={item.alt}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Partners;
